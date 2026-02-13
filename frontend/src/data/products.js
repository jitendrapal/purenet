// src/data/products.js
import peanut375 from "../assets/PeanutButter375g.webp";
import peanut700 from "../assets/PeanutButter700g.webp";
import peanut1kg from "../assets/PeanutButter1Kg.webp";

import peanutCrunchy375 from "../assets/PeanutButterCrunchy375g.webp";
import peanutCrunchy700 from "../assets/PeanutButterCrunchy700g.webp";
import peanutCrunchy1kg from "../assets/PeanutButterCrunchy1kg.webp";

import hazelMilk375 from "../assets/HazelnutButterMilkChocolate375g.webp";

import hazelDark375 from "../assets/HazelnutButterDarkChocolate375g.webp";
import hazelDark700 from "../assets/HazelnutButterDarkChocolate700g.webp";
import hazelDark1kg from "../assets/HazelnutButterDarkChocolate1kg.webp";

import almond375 from "../assets/AlmondButter375g.webp";

export const PRODUCTS = [
  {
    id: "peanut-butter",
    name: "Peanut Butter",
    brand: "PureNut",
    category: "Nut Butter",
    description:
      "Freshly roasted peanuts blended into a smooth, creamy butter.",
    variants: [
      {
        sku: "PB-375",
        weight: "375 g",
        price: "4.50€",
        image: peanut375,
        inStock: true,
      },
      {
        sku: "PB-700",
        weight: "700 g",
        price: "8€",
        image: peanut700,
        inStock: true,
      },
      {
        sku: "PB-1KG",
        weight: "1 Kg",
        price: "10.50€",
        image: peanut1kg,
        inStock: true,
      },
    ],
  },

  {
    id: "peanut-butter-crunchy",
    name: "Peanut Butter (Crunchy)",
    brand: "PureNut",
    category: "Nut Butter",
    description:
      "Crunchy peanut butter with roasted peanut pieces for extra bite.",
    variants: [
      {
        sku: "PBC-375",
        weight: "375 g",
        price: "4.50€",
        image: peanutCrunchy375,
        inStock: true,
      },
      {
        sku: "PBC-700",
        weight: "700 g",
        price: "8€",
        image: peanutCrunchy700,
        inStock: true,
      },
      {
        sku: "PBC-1KG",
        weight: "1 Kg",
        price: "10.50€",
        image: peanutCrunchy1kg,
        inStock: true,
      },
    ],
  },

  {
    id: "hazelnut-butter-milk-chocolate",
    name: "Hazelnut Butter (Milk Chocolate)",
    brand: "PureNut",
    category: "Nut Butter",
    description:
      "Creamy milk chocolate hazelnut-style spread with a smooth, rich taste.",
    variants: [
      {
        sku: "HB-MC-375",
        weight: "375 g",
        price: "10.50€",
        image: hazelMilk375,
        inStock: true,
      },

      {
        sku: "HB-MC-700",
        weight: "700 g",
        price: "19.25€",
        image: hazelMilk375,
        inStock: true,
      },
      {
        sku: "HB-MC-1KG",
        weight: "1 Kg",
        price: "26.50€",
        image: hazelMilk375,
        inStock: true,
      },
    ],
  },

  {
    id: "hazelnut-butter-dark-chocolate",
    name: "Hazelnut Butter (Dark Chocolate)",
    brand: "PureNut",
    category: "Nut Butter",
    description:
      "Intense dark chocolate hazelnut-style spread with rich cocoa flavour.",
    variants: [
      {
        sku: "HB-DC-375",
        weight: "375 g",
        price: "10.50€",
        image: hazelDark375,
        inStock: true,
      },
      {
        sku: "HB-DC-700",
        weight: "700 g",
        price: "19.25€",
        image: hazelDark700,
        inStock: true,
      },
      {
        sku: "HB-DC-1KG",
        weight: "1 Kg",
        price: "26.50€",
        image: hazelDark1kg,
        inStock: true,
      },
    ],
  },

  {
    id: "almond-butter",
    name: "Almond Butter (100%)",
    brand: "PureNut",
    category: "Nut Butter",
    description: "100% roasted almonds. No sugar, no oil, no preservatives.",
    variants: [
      {
        sku: "AB-375",
        weight: "375 g",
        price: "7.75€",
        image: almond375,
        inStock: true,
      },
      {
        sku: "AB-700",
        weight: "700 g",
        price: "19.25€",
        image: almond375,
        inStock: true,
      },
      {
        sku: "AB1KG",
        weight: "1 Kg",
        price: "26.50€",
        image: almond375,
        inStock: true,
      },
    ],
  },
];
