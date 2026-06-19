"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    "/gallery1.webp",
    "/gallery2.webp",
    "/gallery3.webp",
    "/gallery4.jpeg",
    "/gallery5.jpg",
    "/gallery6.webp",
    "/gallery7.webp",
    "/gallery8.jpg",
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-2">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-red-600 font-semibold uppercase tracking-wider">
            Our Gallery
          </span>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-3">
            Moments From Babaji Udyog
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore our manufacturing facility, quality processes, products,
            and the dedication that goes into every product we create.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                width={500}
                height={500}
                className="w-full h-56 object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white"
          >
            <X size={36} />
          </button>

          <Image
            src={selectedImage}
            alt="Gallery Preview"
            width={1200}
            height={800}
            className="max-h-[90vh] w-auto rounded-lg"
          />
        </div>
      )}
    </section>
  );
}