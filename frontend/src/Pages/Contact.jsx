// src/routes/Contact.jsx
import React, { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus(null);

    const form = e.target;

    // Send to FormSubmit with your email
    fetch("https://formsubmit.co/info@thepurenut.nl", {
      method: "POST",
      body: new FormData(form),
    })
      .then((res) => {
        console.log("FormSubmit response status:", res.status);
        setSubmitStatus("success");
        form.reset();
        // Auto-hide success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      })
      .catch((err) => {
        console.error("FormSubmit error:", err);
        setSubmitStatus("error");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-10 pb-20 sm:px-6 lg:px-8">
        {/* Intro */}
        <section className="max-w-3xl pt-2 md:pt-4">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-800">
            Contact PureNut
          </span>
          <h1 className="mb-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Let&apos;s talk{" "}
            <span className="bg-gradient-to-r from-[#BE6428] via-[#D47A34] to-[#F5A75A] bg-clip-text text-transparent">
              Peanut Butter
            </span>
            .
          </h1>
          <p className="text-sm text-slate-600 sm:text-base">
            Share a few details about yourself and what you&apos;re looking for.
            We&apos;ll help you with product recommendations, pricing and
            availability for PureNut butters.
          </p>
        </section>

        {/* Main contact layout */}
        <section className="mt-8 grid items-start gap-8 lg:mt-10 lg:grid-cols-[1.3fr_1fr]">
          {/* Form */}
          <div className="rounded-3xl border border-[#BA5C1E]/20 bg-white shadow-xl p-6 sm:p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Get in Touch
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 text-xs sm:text-sm"
            >
              {/* FormSubmit hidden fields */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_subject"
                value="New Contact Form Submission from PureNut"
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-700">
                    Full name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="fullname"
                    type="text"
                    required
                    className="rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-[#BA5C1E] focus:ring-2 focus:ring-[#BA5C1E]/20"
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-700">
                    Restaurant / company
                  </label>
                  <input
                    name="company"
                    type="text"
                    className="rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-[#BA5C1E] focus:ring-2 focus:ring-[#BA5C1E]/20"
                    placeholder="Business name (optional)"
                    autoComplete="organization"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-[#BA5C1E] focus:ring-2 focus:ring-[#BA5C1E]/20"
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-700">
                    Phone / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    className="rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-[#BA5C1E] focus:ring-2 focus:ring-[#BA5C1E]/20"
                    placeholder="+31-XXXXXXXXXX"
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700">
                  What do you need help with?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  name="requirement"
                  required
                  className="rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-[#BA5C1E] focus:ring-2 focus:ring-[#BA5C1E]/20"
                >
                  <option value="">Select an option</option>
                  <option>Peanut butter for home use</option>
                  <option>Peanut butter for café / restaurant</option>
                  <option>Bulk / HoReCa packs</option>
                  <option>Gifting or custom label jars</option>
                  <option>Distributorship / retail enquiry</option>
                  <option>Something else</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-700">
                  Briefly describe your requirement{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="resize-none rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-[#BA5C1E] focus:ring-2 focus:ring-[#BA5C1E]/20"
                  placeholder="Tell us how you plan to use PureNut butters, approximate quantities and any specific flavours you’re interested in..."
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  name="consent"
                  id="consent"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 rounded border-2 border-slate-300 bg-white text-[#BA5C1E] focus:ring-2 focus:ring-[#BA5C1E]/20"
                />
                <label
                  htmlFor="consent"
                  className="text-sm leading-relaxed text-slate-600"
                >
                  I agree to be contacted by PureNut. My details will be used
                  only for this enquiry and not shared with third parties.
                </label>
              </div>

              {/* Success/Error Messages */}
              {submitStatus === "success" && (
                <div className="rounded-xl bg-green-50 border-2 border-green-200 p-4 flex items-start gap-3">
                  <svg
                    className="h-6 w-6 text-green-600 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-green-900">Success!</h3>
                    <p className="text-sm text-green-700 mt-1">
                      Your message has been sent. We'll get back to you within
                      24 hours.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="rounded-xl bg-red-50 border-2 border-red-200 p-4 flex items-start gap-3">
                  <svg
                    className="h-6 w-6 text-red-600 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-red-900">Error!</h3>
                    <p className="text-sm text-red-700 mt-1">
                      Something went wrong. Please try again or contact us
                      directly.
                    </p>
                  </div>
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#BA5C1E] to-[#D97236] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#BA5C1E]/30 transition-all hover:shadow-xl hover:shadow-[#BA5C1E]/40 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Submit Request"
                )}
              </button>

              <p className="text-xs text-slate-500 text-center">
                Typical response time: within 1 business day. Please check your
                email (Inbox, Spam, Promotions) for our reply.
              </p>
            </form>
          </div>

          {/* Side info card */}
          <div className="space-y-4">
            <div className="rounded-3xl border border-[#BA5C1E]/20 bg-white shadow-xl p-6">
              <p className="mb-4 text-xs uppercase tracking-wider text-[#BA5C1E] font-semibold">
                Direct contact
              </p>
              <div className="space-y-3 text-sm text-slate-800">
                <p className="flex items-start gap-2">
                  <span className="text-lg">📧</span>
                  <span>
                    Email:{" "}
                    <a
                      href="mailto:info@thepurenut.nl"
                      className="font-medium text-[#BA5C1E] hover:text-[#D97236] transition-colors"
                    >
                      info@thepurenut.nl
                    </a>
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-lg">📱</span>
                  <span>
                    Phone / WhatsApp:{" "}
                    <a
                      href="tel:+31633006871"
                      className="font-medium text-[#BA5C1E] hover:text-[#D97236] transition-colors"
                    >
                      +31 63 300 6871
                    </a>
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-lg">📍</span>
                  <span>129 Jane Addamslaan, 1187DA, Amstelveen</span>
                </p>
              </div>
              <p className="mt-4 text-xs text-slate-500 leading-relaxed">
                Prefer a quick call? Reach out directly and we&apos;ll walk you
                through products, pricing and sample jars.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
