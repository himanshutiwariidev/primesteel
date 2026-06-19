"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "What products do you supply?",
      answer:
        "We supply a wide range of MS Products, Stainless Steel Products, Pipes, Sheets, Coils, Plates, Rods, Bright Bars, Industrial Scrap and related materials.",
    },
    {
      question: "Do you provide bulk orders?",
      answer:
        "Yes, we specialize in bulk supply for construction companies, manufacturers, fabricators and industrial clients across India.",
    },
    {
      question: "Do you offer delivery services?",
      answer:
        "Yes, we provide safe and timely delivery of materials across India through our trusted logistics network.",
    },
    {
      question: "Can I request a custom quotation?",
      answer:
        "Absolutely. Contact us with your requirements and our team will provide a competitive quotation based on quantity and specifications.",
    },
    {
      question: "What grades of Stainless Steel do you deal in?",
      answer:
        "We deal in Stainless Steel grades including 304, 310, 316, 202 and 430 in various forms such as Sheets, Pipes, Coils, Rods and Strips.",
    },
    {
      question: "How can I place an order?",
      answer:
        "You can call us directly, send an inquiry through the contact form, or request a quotation online for quick assistance.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-10 bg-slate-800 overflow-hidden">
      {/* Background Glow */}
      

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-5">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <span className="text-red-500 text-2xl md:text-4xl font-semibold uppercase tracking-wider">
            Frequently Asked Questions
          </span>

          <p className="text-slate-400 mt-4 max-w-23xl mx-auto">
            Find answers to the most common questions about our products,
            supply process and delivery services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-red-500 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left p-5 md:p-6"
              >
                <h3 className="font-semibold text-white text-base md:text-lg pr-4">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`text-red-500 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  size={22}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 md:px-6 pb-5 md:pb-6 text-slate-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Box */}
        <div className="mt-10 md:mt-14">
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-md p-5 text-center">
            <h3 className="text-white text-2xl md:text-3xl font-bold">
              Still Have Questions?
            </h3>

            <p className="text-red-100 mt-3 max-w-3xl mx-auto">
              Contact our team for product information, pricing, specifications
              and bulk order inquiries.
            </p>

            <button className="mt-6 bg-white text-red-500 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}