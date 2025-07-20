import { Link } from "react-router-dom";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <PlaceholderImage
          text=""
          className="w-full h-full mt-20"
          src={"https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg"}
          pattern="gradient"
          imageIndex={0}
          rounded={false}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-[15%] w-48 h-48 rounded-full bg-accent/20 blur-3xl"></div>

      {/* Jewelry Images - Positioned Elements */}
      <div className="absolute right-[5%] top-1/4 w-[300px] hidden lg:block">
        <PlaceholderImage
          text="Elegant Necklace"
          className="w-full aspect-square rounded-full shadow-2xl border-4 border-white/40"
          pattern="gradient"
          imageIndex={2}
        />
      </div>
      <div className="absolute  right-[15%] bottom-[15%] w-[200px] hidden lg:block">
        <PlaceholderImage
          text="Pearl Earrings"
          className="w-full aspect-square rounded-full shadow-2xl border-4 border-white/40"
          pattern="gradient"
          imageIndex={1}
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="max-w-2xl">
          <h1 className="heading-xl mb-6 font-light text-white drop-shadow-lg">
            Timeless Elegance<br />
            <span className="text-amber-200">Reimagined</span>
          </h1>

          <p className="text-lg md:text-xl mb-8 max-w-lg text-white/90 drop-shadow-lg">
            Discover our exquisite collection of luxury artificial jewelry, crafted to elevate your style with grace and sophistication.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="elegant-button-filled">
              <Link to="/shop">
                Explore Collection
              </Link>
            </Button>

            <Button asChild variant="outline" className="elegant-button-outline bg-white/10 text-white border-white/70 hover:bg-white/20">
              <Link to="/collections/new-arrivals">
                New Arrivals
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}