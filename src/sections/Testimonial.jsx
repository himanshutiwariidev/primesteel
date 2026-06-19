import { Star, Quote } from "lucide-react";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Rajesh Sharma",
      company: "Sharma Fabricators",
      review:
        "Prime Steels has consistently supplied high-quality MS Pipes and Plates for our projects. Their delivery and pricing are always reliable.",
    },
    {
      name: "Amit Gupta",
      company: "AG Construction",
      review:
        "Excellent product quality and timely delivery. We have been sourcing Stainless Steel products from them for years.",
    },
    {
      name: "Vikram Singh",
      company: "VS Engineering Works",
      review:
        "Very professional team with competitive pricing. Their stock availability helped us complete projects without delays.",
    },
    {
      name: "Sanjay Verma",
      company: "Industrial Solutions",
      review:
        "One of the most trusted suppliers we have worked with. Great customer support and quality materials.",
    },
    {
      name: "Rakesh Jain",
      company: "RJ Metal Industries",
      review:
        "Premium quality steel products and excellent service. Highly recommended for bulk industrial requirements.",
    },
    {
      name: "Manoj Agarwal",
      company: "Agarwal Traders",
      review:
        "Fast response, transparent pricing and timely dispatch. We are very satisfied with their services.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-5">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <span className="text-red-500 font-semibold uppercase tracking-wider">
            Testimonials
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3">
            What Our Clients Say
          </h2>

          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Trusted by fabricators, contractors, manufacturers and industries
            across India for quality steel products and reliable service.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-3xl p-5 md:p-8 shadow-sm hover:shadow-xl hover:border-red-500 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 rounded-xl bg-red-100 text-red-500 flex items-center justify-center mb-5">
                <Quote size={22} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-red-500 text-red-500"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-slate-600 leading-relaxed mb-6">
                "{testimonial.review}"
              </p>

              {/* Client Info */}
              <div className="border-t border-gray-200 pt-4">
                <h4 className="text-slate-900 font-semibold text-lg">
                  {testimonial.name}
                </h4>

                <p className="text-red-500 text-sm font-medium">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-12 md:mt-16">
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-white text-2xl md:text-4xl font-bold">
              1000+ Happy Customers Across India
            </h3>

            <p className="text-red-100 mt-3 max-w-2xl mx-auto">
              Delivering premium quality MS Products, Stainless Steel Products
              and Industrial Scrap with unmatched reliability and customer
              satisfaction.
            </p>

            <button className="mt-6 bg-white text-red-500 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition">
              Get a Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}