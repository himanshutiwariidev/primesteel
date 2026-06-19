// components/TopProducts.jsx

import Image from "next/image";
import Link from "next/link";
import data from "@/data/Products.json";

export default function TopProducts() {
  const products = data.categories.flatMap((category) =>
    category.products.map((product) => ({
      ...product,
      categorySlug: category.slug,
      categoryName: category.name,
    }))
  );

  const topProducts = products.slice(0, 8);

  return (
    <section className="py-10 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 text-red-600 font-semibold uppercase tracking-widest text-xs md:text-sm bg-red-50 px-4 py-1.5 rounded-full border border-red-100">
            Best Selling Products
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 md:mt-5 tracking-tight">
            Our Top Products
          </h2>

          <div className="w-16 h-1 bg-red-500 rounded-full mx-auto mt-4 md:mt-5" />

          <p className="text-slate-600 mt-4 md:mt-5 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Explore our premium range of Mild Steel, Stainless Steel and
            Industrial Scrap products available for bulk supply.
          </p>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
          {topProducts.map((product, index) => (
            <Link
              key={product.id}
              href={`/products/${product.categorySlug}/${product.slug}`}
              className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 ease-out"
            >
             

              <div className="relative overflow-hidden bg-slate-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-3.5 md:p-5">
                <span className="inline-block text-[11px] md:text-xs font-medium bg-red-100 text-red-600 px-2.5 py-1 rounded-full">
                  {product.categoryName}
                </span>

                <h3 className="font-bold text-base md:text-lg text-slate-900 mt-2.5 md:mt-3 line-clamp-2 group-hover:text-red-600 transition-colors duration-200">
                  {product.name}
                </h3>

                <div className="mt-3 md:mt-4 flex items-center gap-1.5 text-red-500 font-semibold text-sm">
                  View Details
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-10 md:mt-14">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-7 md:px-9 py-3.5 rounded-xl font-semibold shadow-lg shadow-red-200 hover:shadow-red-300 hover:-translate-y-0.5 transition-all duration-300"
          >
            View All Products
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}