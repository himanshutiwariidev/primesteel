// components/HeroSection.jsx
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Desktop Banner */}
      <div className="hidden md:block">
        <Image
          src="/desktopbanners.webp"
          alt="Prime Steels Banner"
          width={1920}
          height={800}
          priority
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Mobile Banner */}
      <div className="block md:hidden">
        <Image
          src="/mobilebanners.webp"
          alt="Prime Steels Mobile Banner"
          width={900}
          height={900}
          priority
          className="w-full h-auto object-cover"
        />
      </div>

      
      
     
    </section>
  );
}