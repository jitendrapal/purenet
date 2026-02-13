// src/layout/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.webp";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-20 overflow-hidden bg-gradient-to-b from-white to-amber-50/30">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#BA5C1E] to-transparent"></div>

      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img
                src={logo}
                alt="PureNut Logo"
                className="h-16 w-16 rounded-xl object-contain shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div>
                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#BA5C1E] to-[#D97236]">
                  PureNut
                </p>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#BA5C1E]/70">
                  Luxury in a Jar
                </p>
              </div>
            </Link>
            <p className="mt-6 max-w-md text-base leading-relaxed text-slate-600">
              Crafting premium nut butters from the finest ingredients
              worldwide. Every jar is a testament to our commitment to purity,
              quality, and taste.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.instagram.com/the_pure_nut/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-gradient-to-br hover:from-[#BA5C1E] hover:to-[#D97236] hover:text-white text-slate-600"
                aria-label="Instagram"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#BA5C1E] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="group inline-flex items-center text-slate-600 hover:text-[#BA5C1E] transition-colors"
                >
                  <span className="mr-2 text-[#BA5C1E] opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                  <span className="text-sm font-medium">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="group inline-flex items-center text-slate-600 hover:text-[#BA5C1E] transition-colors"
                >
                  <span className="mr-2 text-[#BA5C1E] opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                  <span className="text-sm font-medium">Products</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="group inline-flex items-center text-slate-600 hover:text-[#BA5C1E] transition-colors"
                >
                  <span className="mr-2 text-[#BA5C1E] opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                  <span className="text-sm font-medium">About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="group inline-flex items-center text-slate-600 hover:text-[#BA5C1E] transition-colors"
                >
                  <span className="mr-2 text-[#BA5C1E] opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                  <span className="text-sm font-medium">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#BA5C1E] mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#BA5C1E]/10 to-[#D97236]/10 text-[#BA5C1E]">
                  📍
                </span>
                <span className="text-sm text-slate-600 font-medium">
                  129 Jane Addamslaan, 1187DA, Amstelveen
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#BA5C1E]/10 to-[#D97236]/10 text-[#BA5C1E]">
                  📱
                </span>
                <a
                  href="tel:+31633006871"
                  className="text-sm text-slate-600 hover:text-[#BA5C1E] transition-colors font-medium"
                >
                  +31 63 300 6871
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#BA5C1E]/10 to-[#D97236]/10 text-[#BA5C1E]">
                  📧
                </span>
                <a
                  href="mailto:info@thepurenut.nl"
                  className="text-sm text-slate-600 hover:text-[#BA5C1E] transition-colors font-medium break-all"
                >
                  info@thepurenut.nl
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#BA5C1E]/20 bg-gradient-to-r from-white via-amber-50/50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-600 font-medium">
              © {year} PureNut. All rights reserved.
            </p>
            <a
              href="https://neuroedgetechnologies.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#BA5C1E] hover:text-[#D97236] transition-colors"
            >
              <span>Crafted with</span>
              <span className="text-red-500 animate-pulse">❤️</span>
              <span>by Neuro Edge Technologies</span>
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
