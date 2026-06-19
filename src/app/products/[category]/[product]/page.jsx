import data from "@/data/Products.json";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

export default async function ProductDetailPage({ params }) {
  const { category, product } = await params;

  const categoryData = data.categories.find(
    (item) => item.slug === category
  );

  if (!categoryData) {
    notFound();
  }

  const productData = categoryData.products.find(
    (item) => item.slug === product
  );

  if (!productData) {
    notFound();
  }

  const relatedProducts = categoryData.products
    .filter((item) => item.id !== productData.id)
    .slice(0, 4);

  return (
    <>
      {/* Product Details */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-5">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* Product Image */}
            <div>
              <div className="bg-gray-100 rounded-3xl overflow-hidden border border-gray-200">
                <Image
                  src={productData.image}
                  alt={productData.name}
                  width={800}
                  height={800}
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>

            {/* Product Content */}
            <div>
              <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">
                {categoryData.name}
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-5">
                {productData.name}
              </h1>

              <p className="text-slate-600 mt-6 text-lg leading-relaxed">
                {productData.description}
              </p>

              {/* Features */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-5">
                  Key Features
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {productData.features?.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle
                        size={20}
                        className="text-red-500 flex-shrink-0"
                      />

                      <span className="text-slate-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-10">
                <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-xl font-semibold transition">
                  Request Quote
                </button>

                <Link
                  href="/contact-us"
                  className="border border-slate-300 hover:border-red-500 hover:text-red-500 px-8 py-3 rounded-xl font-semibold transition"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 md:px-5">
            <div className="text-center mb-12">
              <span className="text-red-500 font-semibold uppercase tracking-wider">
                Related Products
              </span>

              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3">
                More {categoryData.name}
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
              {relatedProducts.map((item) => (
                <Link
                  key={item.id}
                  href={`/products/${categoryData.slug}/${item.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
                >
                  <div className="overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={500}
                      height={500}
                      className="w-full aspect-square object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="font-bold text-slate-900">
                      {item.name}
                    </h3>

                    <div className="mt-3 inline-flex items-center text-red-500 font-semibold">
                      View Product
                      <ArrowRight
                        size={16}
                        className="ml-2"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}