import React from "react";

export function SaleStrip() {
  const text =
    "No refined sugar in our 100% variants, no palm oil and no preservatives — just nuts and carefully chosen additions where needed.";

  return (
    <div className="border-b border-[#BA5C1E]/20 bg-gradient-to-r from-[#BA5C1E] via-[#D97236] to-[#BA5C1E]">
      <div className="relative mx-auto overflow-hidden py-2.5">
        <div className="flex animate-marquee whitespace-nowrap text-xs sm:text-sm font-semibold text-white">
          <span className="mx-8">✨ {text}</span>
          <span className="mx-8">✨ {text}</span>
          <span className="mx-8">✨ {text}</span>
          <span className="mx-8">✨ {text}</span>
          <span className="mx-8">✨ {text}</span>
          <span className="mx-8">✨ {text}</span>
        </div>
      </div>
    </div>
  );
}
