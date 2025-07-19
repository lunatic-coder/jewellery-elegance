import Hero from "@/components/home/Hero";
import CategoryShowcase from "@/components/home/CategoryShowcase";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import NewArrivals from "@/components/home/NewArrivals";
import Testimonial from "@/components/home/Testimonial";
import Newsletter from "@/components/home/Newsletter";
import JewelryPreview from "@/components/home/JewelryPreview";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function IndexPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CategoryShowcase />
        <JewelryPreview />
        <FeaturedProducts />
        <NewArrivals />
        <Testimonial />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}