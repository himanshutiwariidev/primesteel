import data from "@/data/Products.json";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function CategoryPage({ params }) {
  const { category } = await params;

  const categoryData = data.categories.find(
    (item) => item.slug === category
  );

  if (!categoryData) {
    notFound();
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-5">
        <div className="mb-10">
          <h1 className="text-4xl font-bold">
            {categoryData.name}
          </h1>

          <p className="text-gray-600 mt-3">
            {categoryData.description}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryData.products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${categoryData.slug}/${product.slug}`}
              className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="w-full aspect-square object-cover"
              />

              <div className="p-4">
                <h3 className="font-bold">
                  {product.name}
                </h3>

                <span className="text-red-500 text-sm mt-2 inline-block">
                  View Details →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}