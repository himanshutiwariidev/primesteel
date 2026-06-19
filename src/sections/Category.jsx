// components/Categories.jsx

import Image from "next/image";
import Link from "next/link";
import data from "@/data/Products.json";

export default function Categories() {
  return (
    <section className="py-7  bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-5">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <span className="text-red-500 font-semibold uppercase tracking-wider text-sm md:text-base">
            Our Categories
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2 md:mt-3">
            Explore Our Products
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto mt-3 md:mt-4 text-sm md:text-base">
            Supplying premium quality Mild Steel, Stainless Steel &
            Industrial Scrap products across India.
          </p>
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {data.categories.map((category) => (
            <Link
              key={category.id}
              href={`/products/${category.slug}`}
              className="group bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <div className="overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={900}
                  height={900}
                  className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-red-500 transition">
                  {category.name}
                </h3>

                <p className="text-slate-600 mt-2 md:mt-3 text-sm md:text-base">
                  {category.description}
                </p>

                {/* Product Count */}
                <div className="mt-3">
                  <span className="inline-flex items-center bg-red-100 text-red-600 text-xs md:text-sm font-semibold px-3 py-1 rounded-full">
                    {category.products.length} Products
                  </span>
                </div>

                {/* Product Preview */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.products.slice(0, 4).map((product) => (
                    <span
                      key={product.id}
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md"
                    >
                      {product.name}
                    </span>
                  ))}
                </div>

                <div className="mt-5 inline-flex items-center text-red-500 font-semibold text-sm md:text-base">
                  View Products →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}