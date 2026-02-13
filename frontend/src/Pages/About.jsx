// src/routes/About.jsx
import React from "react";
import peanut1kg from "../assets/PeanutButter1Kg.webp";
import peanut375 from "../assets/PeanutButter375g.webp";
import hazelDark375 from "../assets/HazelnutButterDarkChocolate375g.webp";

export default function About() {
  return (
    <div className="bg-gradient-to-b from-white via-amber-50/30 to-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <p className="inline-block rounded-full bg-gradient-to-r from-[#BA5C1E] to-[#D97236] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-sm">
                Our Story
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                A Story of{" "}
                <span className="bg-gradient-to-r from-[#BA5C1E] to-[#D97236] bg-clip-text text-transparent">
                  Purity
                </span>{" "}
                and{" "}
                <span className="bg-gradient-to-r from-[#BA5C1E] to-[#D97236] bg-clip-text text-transparent">
                  Passion
                </span>
              </h1>
            </div>

            <div className="space-y-4 text-base leading-relaxed text-slate-600">
              <p className="text-lg">
                PureNut isn't just about nut butter. It's about a belief that{" "}
                <span className="font-semibold text-slate-900">real food still exists</span>.
              </p>
              <p>
                Our founder — a mom and finance professional — spent years
                searching for something simple and honest to feed her family.
                After tasting freshly roasted peanut butter in Groningen, she
                realized Amsterdam needed this purity.
              </p>
              <p>
                Today, PureNut crafts premium nut butters from the finest
                ingredients sourced globally — peanuts from Argentina, Brazil,
                and the USA; hazelnuts from Georgia; almonds from California;
                and Barry Callebaut chocolate for indulgent variants.
              </p>
            </div>

            {/* Key Values */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#BA5C1E]">100%</div>
                <div className="mt-1 text-xs font-medium text-slate-600">Natural</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#BA5C1E]">0</div>
                <div className="mt-1 text-xs font-medium text-slate-600">Preservatives</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#BA5C1E]">Premium</div>
                <div className="mt-1 text-xs font-medium text-slate-600">Quality</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#BA5C1E]/20 to-[#D97236]/20 blur-2xl"></div>
            <div className="relative overflow-hidden rounded-2xl bg-white p-2 shadow-2xl">
              <img
                src={peanut1kg}
                alt="PureNut Premium Peanut Butter"
                className="h-auto w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            What Makes Us Different
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Our commitment to quality and authenticity
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Mission */}
          <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-[#BA5C1E]/10 to-[#D97236]/10"></div>
            <div className="relative">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#BA5C1E] to-[#D97236] text-2xl text-white shadow-lg">
                🎯
              </div>
              <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                To bring back simplicity and honesty to everyday food. We believe
                in creating products that you can trust and your family will love.
              </p>
            </div>
          </div>

          {/* Quality */}
          <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-[#BA5C1E]/10 to-[#D97236]/10"></div>
            <div className="relative">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#BA5C1E] to-[#D97236] text-2xl text-white shadow-lg">
                ✨
              </div>
              <h3 className="text-xl font-bold text-slate-900">Premium Ingredients</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Sourced from the finest farms worldwide. Every ingredient is
                carefully selected to ensure the highest quality and taste.
              </p>
            </div>
          </div>

          {/* Process */}
          <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-[#BA5C1E]/10 to-[#D97236]/10"></div>
            <div className="relative">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#BA5C1E] to-[#D97236] text-2xl text-white shadow-lg">
                🔬
              </div>
              <h3 className="text-xl font-bold text-slate-900">Artisan Crafted</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Small-batch production ensures every jar meets our exacting
                standards. No shortcuts, no compromises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#BA5C1E] to-[#D97236] p-1 shadow-2xl">
          <div className="rounded-3xl bg-white p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                  Crafted with Care
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  Every jar of PureNut is a testament to our commitment to quality
                  and purity.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    <span className="text-slate-700">
                      <strong className="font-semibold text-slate-900">No Refined Sugar</strong> - Only natural sweetness
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    <span className="text-slate-700">
                      <strong className="font-semibold text-slate-900">No Palm Oil</strong> - Better for you and the planet
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      ✓
                    </span>
                    <span className="text-slate-700">
                      <strong className="font-semibold text-slate-900">No Preservatives</strong> - Just pure, fresh ingredients
                    </span>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-xl bg-amber-50 p-4 shadow-md">
                  <img
                    src={peanut375}
                    alt="Peanut Butter 375g"
                    className="h-auto w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-xl bg-amber-50 p-4 shadow-md">
                  <img
                    src={hazelDark375}
                    alt="Hazelnut Butter Dark Chocolate"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
