import {
  Building2,
  PackageCheck,
  Truck,
  Users,
} from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      number: "10+",
      label: "Years of Experience",
    },
    {
      number: "5000+",
      label: "Orders Delivered",
    },
    {
      number: "1000+",
      label: "Happy Customers",
    },
    {
      number: "100+",
      label: "Cities Served",
    },
  ];

  return (
    <section className="bg-white py-7">
      <div className="max-w-7xl mx-auto px-2 md:px-5">
        {/* Heading */}
        <div className="text-center mb-10 ">
          <span className="text-red-500 font-semibold uppercase tracking-[3px]">
            Our Achievements
          </span>

          <h2 className="text-2xl md:text-5xl font-bold text-slate-900 mt-3">
            Trusted By Industries in India
          </h2>

          <p className="max-w-4xl mx-auto text-slate-500 mt-4">
            Delivering premium quality MS & Stainless Steel products with
            reliability, consistency and competitive pricing.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="border border-gray-200 bg-white">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((item, index) => (
              <div
                key={index}
                className={`
                  py-8 
                  text-center
                  ${
                    index !== stats.length - 1
                      ? "border-r border-gray-200"
                      : ""
                  }
                  ${
                    index < 2
                      ? "border-b md:border-b-0 border-gray-200"
                      : ""
                  }
                `}
              >
                <h3 className="text-4xl md:text-6xl font-light text-red-500">
                  {item.number}
                </h3>

                <p className="mt-3 text-[11px] md:text-lg uppercase tracking-[3px] text-slate-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}