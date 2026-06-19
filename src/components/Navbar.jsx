"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-5">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logos.jpeg"
              alt="Prime Steels"
              width={280}
              height={90}
              priority
              className="h-14  lg:h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="font-medium text-slate-700 hover:text-red-500 transition"
            >
              Home
            </Link>

            <Link
              href="/about-us"
              className="font-medium text-slate-700 hover:text-red-500 transition"
            >
              About Us
            </Link>

            {/* Products Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 font-medium text-slate-700 hover:text-red-500 transition">
                Products
                <ChevronDown size={18} />
              </button>

              <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link
                  href="/products/ms-products"
                  className="block px-5 py-3 hover:bg-red-50 transition"
                >
                  MS Products
                </Link>

                <Link
                  href="/products/stainless-steel-products"
                  className="block px-5 py-3 hover:bg-red-50 transition"
                >
                  Stainless Steel Products
                </Link>

                <Link
                  href="/products/industrial-scrap"
                  className="block px-5 py-3 hover:bg-red-50 transition"
                >
                  Industrial Scrap
                </Link>
              </div>
            </div>

            <Link
              href="/products"
              className="font-medium text-slate-700 hover:text-red-500 transition"
            >
              All Products
            </Link>

            <Link
              href="/gallery"
              className="font-medium text-slate-700 hover:text-red-500 transition"
            >
              Gallery
            </Link>

            <Link
              href="/contact-us"
              className="font-medium text-slate-700 hover:text-red-500 transition"
            >
              Contact Us
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="tel:+919811937405"
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-lg font-semibold transition"
            >
              <Phone size={18} />
              Call Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden text-slate-800"
          >
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-5 py-4 flex flex-col">
            <Link
              href="/"
              className="py-3 border-b border-gray-100"
              onClick={() => setMobileMenu(false)}
            >
              Home
            </Link>

            <Link
              href="/about-us"
              className="py-3 border-b border-gray-100"
              onClick={() => setMobileMenu(false)}
            >
              About Us
            </Link>

            {/* Mobile Products Dropdown */}
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="py-3 border-b border-gray-100 flex items-center justify-between"
            >
              Products

              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  productsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {productsOpen && (
              <div className="pl-4 py-2 border-b border-gray-100">
                <Link
                  href="/products/ms-products"
                  className="block py-2"
                  onClick={() => setMobileMenu(false)}
                >
                  MS Products
                </Link>

                <Link
                  href="/products/stainless-steel-products"
                  className="block py-2"
                  onClick={() => setMobileMenu(false)}
                >
                  Stainless Steel Products
                </Link>

                <Link
                  href="/products/industrial-scrap"
                  className="block py-2"
                  onClick={() => setMobileMenu(false)}
                >
                  Industrial Scrap
                </Link>

                <Link
                  href="/products"
                  className="block py-2"
                  onClick={() => setMobileMenu(false)}
                >
                  All Products
                </Link>
              </div>
            )}

            <Link
              href="/gallery"
              className="py-3 border-b border-gray-100"
              onClick={() => setMobileMenu(false)}
            >
              Gallery
            </Link>

            <Link
              href="/contact-us"
              className="py-3 border-b border-gray-100"
              onClick={() => setMobileMenu(false)}
            >
              Contact Us
            </Link>

            <Link
              href="tel:+919811937405"
              className="mt-5 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg text-center font-semibold transition"
              onClick={() => setMobileMenu(false)}
            >
              Call Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}