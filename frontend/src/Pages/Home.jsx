// src/Pages/Home.jsx (or src/routes/Home.jsx)
import React from "react";
import { FoodHero } from "../components/FoodHero";
import { Accordion } from "../components/ui/Accordion";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import { ProductCard } from "../components/ProductCard";

export default function Home() {
  const accordionItems = [
    {
      title: "Is PureNut peanut butter made with any additives?",
      content:
        "No. PureNut butters are made from premium nuts with no added oils, no preservatives and no artificial flavours.",
    },
    {
      title: "What makes your peanut butter different?",
      content:
        "We slow-roast our nuts in small batches and grind them fresh for a rich, natural flavour and a creamy, spoonable texture.",
    },
    {
      title: "How should I store the jars?",
      content:
        "Store in a cool, dry place. Natural oil separation is normal — just stir well. You can refrigerate after opening if you prefer a thicker texture.",
    },
  ];

  return (
    <>
      <FoodHero />

      {/* Featured products */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between animate-slide-up">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#BA5C1E]">
              Featured nut butters
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Quick picks from the PureNut range
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#BA5C1E] hover:text-[#D97236] transition-colors group"
          >
            View all products
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>

        {/* 4 products per row with staggered animation */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product, index) => (
            <div
              key={product.id}
              className={`animate-slide-up stagger-${Math.min(index + 1, 4)}`}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* Why choose us + FAQs */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr,1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#BA5C1E]">
              Why peanut lovers choose us
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Freshly ground nut butters, crafted honestly.
            </h2>
            <p className="mt-3 text-base text-slate-700 leading-relaxed">
              We start with high-quality nuts, roast them in small batches and
              grind them without shortcuts — so every spoonful tastes clean,
              rich and real.
            </p>

            <div className="mt-6 grid gap-4 text-sm text-slate-700 sm:grid-cols-2">
              <div className="group rounded-xl border border-[#BA5C1E]/20 bg-white p-5 shadow-elegant hover:shadow-elegant-lg transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#BA5C1E] transition-colors">
                  100% honest ingredients
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  No refined sugar in our 100% variants, no palm oil and no
                  preservatives — just nuts and carefully chosen additions where
                  needed.
                </p>
              </div>

              <div className="group rounded-xl border border-[#BA5C1E]/20 bg-white p-5 shadow-elegant hover:shadow-elegant-lg transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#BA5C1E] transition-colors">
                  Small-batch roasting
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Nuts are roasted in small batches for better control over
                  flavour and aroma, then ground while fresh for maximum taste.
                </p>
              </div>

              <div className="group rounded-xl border border-[#BA5C1E]/20 bg-white p-5 shadow-elegant hover:shadow-elegant-lg transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#BA5C1E] transition-colors">
                  Variants for every palate
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Smooth, crunchy, chocolate and 100% nut options so you can
                  match every breakfast bowl, smoothie and dessert.
                </p>
              </div>

              <div className="group rounded-xl border border-[#BA5C1E]/20 bg-white p-5 shadow-elegant hover:shadow-elegant-lg transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#BA5C1E] transition-colors">
                  Perfect for home & HoReCa
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Packed for both home consumers and professional kitchens —
                  ideal for toast bars, cafés, desserts and prep counters.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#BA5C1E]">
              FAQs
            </p>
            <Accordion items={accordionItems} />
          </div>
        </div>
      </section>
    </>
  );
}
