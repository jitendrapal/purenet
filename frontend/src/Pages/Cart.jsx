// src/Pages/Cart.jsx (or src/routes/Cart.jsx)
import React, { useState } from "react";
import { useStore } from "../context/StoreContext";
import { CartItem } from "../components/CartItem";
import { Input } from "../components/ui/Input";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { WhatsApp } from "@mui/icons-material";
import { WhatsAppOrderModal } from "../components/WhatsAppOrderModal";
import emailjs from "@emailjs/browser";

// ✅ EmailJS constants
const EMAILJS_SERVICE_ID = "service_nyx4ons";
const TEMPLATE_CUSTOMER_ID = "template_lrlw5uo";
const TEMPLATE_ADMIN_ID = "template_npmwdac";
const EMAILJS_PUBLIC_KEY = "LCOhbuOkeobyNb5Uo";

// ✅ Google Apps Script Web App URL (replace this with your real URL)
const SHEET_WEBHOOK_URL =
  "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";

export default function Cart() {
  const {
    state: { cart },
    dispatch,
  } = useStore();

  const [customer, setCustomer] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    notes: "",
  });

  const [orderPlacedId, setOrderPlacedId] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [whatsappModalOpen, setWhatsappModalOpen] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppOrder = () => {
    if (!cart.length) {
      alert("Your cart is empty!");
      return;
    }
    setWhatsappModalOpen(true);
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    if (!cart.length || !customer.name || !customer.email || !customer.phone) {
      return;
    }

    setStatus("sending");

    // ✅ Formatted items list for email (plain text with good formatting)
    const itemsList = cart
      .map(
        (item, index) => `
${index + 1}. ${item.name}
   Quantity: ${item.qty}
   Price: €${item.price.toFixed(2)} each
   Subtotal: €${(item.price * item.qty).toFixed(2)}
`,
      )
      .join("\n");

    const orderId = `ORD-${Date.now()}`;
    const now = new Date();
    const orderDate = now.toLocaleDateString("en-NL", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const baseParams = {
      email: customer.email, // used by EmailJS "To Email: {{email}}"
      customer_name: customer.name,
      customer_email: customer.email,
      customer_phone: customer.phone,
      customer_company: customer.company || "Not provided",
      notes: customer.notes || "No notes",
      order_id: orderId,
      order_date: orderDate,
      total: `€${total.toFixed(2)}`,
      year: now.getFullYear(),
      items: itemsList, // formatted plain text list
    };

    try {
      // 📧 1) Send order confirmation to CUSTOMER
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        TEMPLATE_CUSTOMER_ID,
        baseParams,
        EMAILJS_PUBLIC_KEY,
      );

      // 📧 2) Send order details to ADMIN
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        TEMPLATE_ADMIN_ID,
        {
          ...baseParams,
          email: "info@thepurenut.nl", // admin receiver
        },
        EMAILJS_PUBLIC_KEY,
      );

      // 📊 3) Log order to Google Sheets via Apps Script
      try {
        await fetch(SHEET_WEBHOOK_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(baseParams),
        });
      } catch (err) {
        console.error("Sheets logging error:", err);
      }

      // 🛒 4) Update app state
      dispatch({
        type: "PLACE_ORDER",
        payload: { customer, orderId },
      });

      setOrderPlacedId(orderId);
      setCustomer({
        name: "",
        company: "",
        email: "",
        phone: "",
        notes: "",
      });

      setStatus("success");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
        Your basket
      </p>

      <h1 className="mt-1 text-lg font-semibold text-slate-900 sm:text-xl">
        Review items & share delivery details.
      </h1>

      <p className="mt-1 text-xs text-slate-600">
        Check your selected food products and tell us where to deliver.
        You&apos;ll receive a confirmation over email.
      </p>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1.6fr,1fr]">
        {/* 🛒 Cart Items */}
        <div className="rounded-2xl border border-emerald-100 bg-white/95 p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-900">
            Items in your basket
          </h2>

          {cart.length === 0 ? (
            <p className="mt-3 text-sm text-slate-600">Your basket is empty.</p>
          ) : (
            <div className="mt-3 space-y-3">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* 📦 Customer Details */}
        <form
          onSubmit={handlePlaceOrder}
          className="rounded-2xl border border-emerald-100 bg-white/95 p-4 shadow-sm"
        >
          <h2 className="text-sm font-semibold text-slate-900">
            Contact & delivery info
          </h2>

          <div className="mt-3 space-y-3">
            <Input
              required
              name="name"
              value={customer.name}
              onChange={handleChange}
              placeholder="Your name"
            />
            <Input
              name="company"
              value={customer.company}
              onChange={handleChange}
              placeholder="Company (optional)"
            />
            <Input
              required
              type="email"
              name="email"
              value={customer.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <Input
              required
              name="phone"
              value={customer.phone}
              onChange={handleChange}
              placeholder="Mobile / WhatsApp"
            />

            <textarea
              name="notes"
              value={customer.notes}
              onChange={handleChange}
              rows={3}
              className="block w-full rounded-lg border border-emerald-100 px-3 py-2 text-sm"
              placeholder="Delivery address / notes"
            />
          </div>

          <div className="mt-4 border-t pt-4 flex justify-between text-sm">
            <span>Estimated total</span>
            <span className="font-semibold text-emerald-700">
              €{total.toFixed(2)}
            </span>
          </div>

          <button
            type="submit"
            disabled={!cart.length || status === "sending"}
            className="mt-4 w-full rounded-full bg-[#BA5C1E] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#BA5C1E] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === "sending" ? "Placing order..." : "Place order request"}
          </button>

          {/* WhatsApp Order Button */}
          <div className="mt-3 text-center">
            <p className="mb-2 text-xs text-slate-500">OR</p>
            <button
              type="button"
              onClick={handleWhatsAppOrder}
              disabled={!cart.length}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-green-500/30 transition-all duration-300 hover:from-green-600 hover:to-green-700 hover:shadow-xl hover:shadow-green-500/40 disabled:cursor-not-allowed disabled:opacity-50 disabled:from-slate-300 disabled:to-slate-300"
            >
              <WhatsApp className="text-xl" />
              Order via WhatsApp
            </button>
            <p className="mt-2 text-[10px] text-slate-500">
              Quick order through WhatsApp - Get instant confirmation!
            </p>
          </div>

          {status === "success" && orderPlacedId && (
            <div className="mt-3 flex gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-xs text-emerald-800">
              <CheckCircleIcon fontSize="small" />
              <div>
                <p className="font-semibold">Order placed successfully</p>
                <p>Confirmation sent for #{orderPlacedId}</p>
              </div>
            </div>
          )}

          {status === "error" && (
            <p className="mt-3 text-xs text-red-600">
              Failed to send email. Please try again.
            </p>
          )}
        </form>
      </div>

      {/* WhatsApp Order Modal */}
      <WhatsAppOrderModal
        open={whatsappModalOpen}
        onClose={() => setWhatsappModalOpen(false)}
        cart={cart}
        total={total}
      />
    </section>
  );
}
