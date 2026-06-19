// components/AboutSection.jsx

import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function AboutSection() {
  const features = [
    "Premium Quality Steel",
    "Competitive Pricing",
    "Trusted Industry Supplier",
    "Bulk Order Capability",
  ];

  return (
    <section className="py-5 md:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-5">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image */}
          <div className="hidden md:block relative">
            <Image
              src="/aboutimg.webp"
              alt="About Prime Steels"
              width={700}
              height={700}
              className="w-full rounded-3xl object-cover shadow-xl"
            />

          
          </div>

          {/* Content */}
          <div>
            <span className="text-red-500 font-semibold uppercase tracking-[3px]">
              About Us
            </span>

            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mt-4 leading-tight">
              Your Trusted Partner For
              <span className="text-red-500">
                {" "}MS & Stainless Steel Products
              </span>
            </h2>

            {/* Mobile Image */}
            <div className="md:hidden mt-6">
              <Image
                src="/aboutimg.webp"
                alt="About Prime Steels"
                width={700}
                height={500}
                className="w-full rounded-3xl object-cover shadow-xl"
              />
            </div>

            <p className="mt-6 text-slate-600 text-lg leading-relaxed">
              Prime Steels is a leading supplier and trader of Mild Steel,
              Stainless Steel and Industrial Scrap products. We provide a wide
              range of quality materials including Pipes, Sheets, Coils, Plates,
              Rods, Bright Bars and Industrial Scrap to industries across India.
            </p>

            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              With a strong commitment to quality, reliability and customer
              satisfaction, we ensure timely delivery and competitive pricing
              for every order, whether small or bulk. Our mission is to provide
              durable steel solutions that help businesses grow with confidence.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mt-5">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4 hover:border-red-500 hover:shadow-md transition-all duration-300"
                >
                  <CheckCircle
                    size={20}
                    className="text-red-500 flex-shrink-0"
                  />

                  <span className="text-slate-700 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mt-10">
              <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-red-500/20">
                Get Quote
              </button>

              <button className="border border-slate-300 text-slate-800 hover:border-red-500 hover:text-red-500 px-8 py-3 rounded-md font-semibold transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}