import AboutSection from "@/sections/About";
import Categories from "@/sections/Category";
import FAQSection from "@/sections/Faq";
import GallerySection from "@/sections/Gallery";
import HeroSection from "@/sections/Hero";
import StatsSection from "@/sections/Stats";
import TestimonialSection from "@/sections/Testimonial";
import TopProducts from "@/sections/Topprproducts";
import WhyChooseUs from "@/sections/Whychooseus";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <StatsSection/>
    <Categories/>
    <AboutSection/>
    <TopProducts/>
    <WhyChooseUs/>
    <GallerySection/>
    <FAQSection/>
    <TestimonialSection/>
    </>
  );
}
