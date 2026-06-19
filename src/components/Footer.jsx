// components/Footer.jsx

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-5 py-14 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Company Info */}
          <div>
            <h2 className="text-3xl font-bold">
              PRIME
              <span className="text-red-500"> STEELS</span>
            </h2>

            <p className="text-gray-400 mt-5 leading-relaxed">
              Trusted supplier of MS Products, Stainless Steel Products and
              Industrial Scrap across India with quality assurance,
              competitive pricing and timely delivery.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-500 transition-all duration-300"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-500 transition-all duration-300"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-500 transition-all duration-300"
              >
                <FaLinkedinIn size={16} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-500 transition-all duration-300"
              >
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about-us"
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Product Categories
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/products/ms-products"
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  MS Products
                </Link>
              </li>

              <li>
                <Link
                  href="/products/stainless-steel-products"
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  Stainless Steel Products
                </Link>
              </li>

              <li>
                <Link
                  href="/products/industrial-scrap"
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  Industrial Scrap
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact Information
            </h3>

            <div className="space-y-5">
              <div className="flex gap-3">
                <Phone
                  size={18}
                  className="text-red-500 mt-1 flex-shrink-0"
                />

                <div>
                  <p className="text-gray-400">
                    +91 9876543210
                  </p>

                  <p className="text-gray-400">
                    +91 9876543211
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail
                  size={18}
                  className="text-red-500 mt-1 flex-shrink-0"
                />

                <p className="text-gray-400 break-all">
                  info@primesteels.com
                </p>
              </div>

              <div className="flex gap-3">
                <MapPin
                  size={18}
                  className="text-red-500 mt-1 flex-shrink-0"
                />

                <p className="text-gray-400">
                  Your Business Address,
                  Industrial Area,
                  Delhi, India
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-5 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Prime Steels. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm text-center">
            Designed & Developed by Digital Crafters
          </p>
        </div>
      </div>
    </footer>
  );
}