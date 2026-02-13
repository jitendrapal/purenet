import React, { useState, useMemo } from "react";
import { PRODUCTS } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { Input } from "../components/ui/Input";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export default function Products() {
  const [search, setSearch] = useState("");
  const [productType, setProductType] = useState("all");

  // Product type filters based on product names
  const productTypes = [
    { value: "all", label: "All Products" },
    { value: "peanut", label: "Peanut Butter" },
    { value: "hazelnut", label: "Hazelnut Butter" },
    { value: "almond", label: "Almond Butter" },
  ];

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchSearch =
        search.trim().length === 0 ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase());

      // Filter by product type
      let matchType = true;
      if (productType !== "all") {
        matchType = p.name.toLowerCase().includes(productType);
      }

      return matchSearch && matchType;
    });
  }, [search, productType]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#BA5C1E]">
            Our Range
          </p>
          <h1 className="text-lg font-semibold text-slate-900 sm:text-xl">
            Premium Peanut Butter Collection
          </h1>
          <p className="mt-1 text-xs text-slate-600">
            Discover our range of freshly roasted peanut butters — smooth,
            crunchy, chocolate-infused and 100% natural blends, crafted for
            taste and nutrition.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="sm:w-60"
          />
          <FormControl size="small" className="sm:w-48">
            <InputLabel id="product-type-label">Product Type</InputLabel>
            <Select
              labelId="product-type-label"
              label="Product Type"
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
            >
              {productTypes.map((type) => (
                <MenuItem key={type.value} value={type.value}>
                  {type.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>

      {/* 👇 4 products per row */}
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

        {filtered.length === 0 && (
          <p className="text-sm text-slate-600">
            No peanut butter products found. Try searching by flavour or type.
          </p>
        )}
      </div>
    </section>
  );
}
