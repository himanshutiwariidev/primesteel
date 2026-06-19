import Image from "next/image";
import Link from "next/link";
import data from "@/data/Products.json";

export default function ProductsPage() {
  const products = data.categories.flatMap((category) =>
    category.products.map((product) => ({
      ...product,
      categorySlug: category.slug,
      categoryName: category.name,
    }))
  );

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <span className="text-red-500 font-semibold uppercase tracking-wider">
            Our Products
          </span>

          <h1 className="text-3xl md:text-5xl font-bold mt-3">
            All Products
          </h1>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.categorySlug}/${product.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="w-full aspect-square object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="p-4">
                <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                  {product.categoryName}
                </span>

                <h3 className="font-bold mt-3">
                  {product.name}
                </h3>

                <div className="mt-3 text-red-500 font-semibold">
                  View Details →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}