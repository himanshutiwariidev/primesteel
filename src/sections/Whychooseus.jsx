// components/WhyChooseUs.jsx

import {
  ShieldCheck,
  Truck,
  BadgeCheck,
  Clock3,
  Warehouse,
  Headphones,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <ShieldCheck size={22} className="md:w-9 md:h-9" />,
      title: "Premium Quality",
      description:
        "We supply only high-grade MS & Stainless Steel products sourced from trusted manufacturers.",
    },
    {
      icon: <Warehouse size={22} className="md:w-9 md:h-9" />,
      title: "Ready Stock",
      description:
        "Large inventory available for immediate dispatch and bulk requirements.",
    },
    {
      icon: <Truck size={22} className="md:w-9 md:h-9" />,
      title: "Pan India Delivery",
      description:
        "Reliable logistics network ensuring safe and timely delivery across India.",
    },
    {
      icon: <BadgeCheck size={22} className="md:w-9 md:h-9" />,
      title: "Competitive Pricing",
      description:
        "Best market rates without compromising on quality and service.",
    },
    {
      icon: <Clock3 size={22} className="md:w-9 md:h-9" />,
      title: "Timely Supply",
      description:
        "Fast quotation process and prompt order fulfillment for every client.",
    },
    {
      icon: <Headphones size={22} className="md:w-9 md:h-9" />,
      title: "Dedicated Support",
      description:
        "Expert assistance before and after sales to help you choose the right products.",
    },
  ];

  return (
    <section className="py-14 md:py-24 bg-gray-800 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-red-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-red-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-5 relative z-10">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-16">
          <span className="text-red-500 font-semibold uppercase tracking-[2px] md:tracking-[4px] text-sm md:text-base">
            Why Choose Us
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 md:mt-4 leading-tight">
            Delivering Strength 
            <span className="text-red-500"> & Quality</span>
          </h2>

          <p className="max-w-3xl mx-auto text-slate-400 mt-4 md:mt-6 text-sm md:text-lg px-2">
            We are committed to providing premium steel solutions with
            exceptional service, reliable supply chains and competitive
            pricing for industries across India.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-8 hover:border-red-500 transition-all duration-500 hover:-translate-y-1 md:hover:-translate-y-2"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-red-500/10 text-red-500 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-red-500 group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>

              <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-4">
                {item.title}
              </h3>

              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

   
        
         
      </div>
    </section>
  );
}