import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";


interface JewelryPreviewProps {
  className?: string;
}

// Sample jewelry items to showcase in a 3D-like gallery
const jewelryItems = [
  {
    id: "necklace-1",
    name: "Diamond Pendant Necklace",
    pattern: "gradient",
    imageIndex: 0,
    imageUrl:"https://images.pexels.com/photos/1721937/pexels-photo-1721937.jpeg"
  },
  {
    id: "earring-1",
    name: "Pearl Drop Earrings",
    pattern: "gradient",
    imageIndex: 1,
    imageUrl:"https://images.pexels.com/photos/6154083/pexels-photo-6154083.jpeg"
  },
  {
    id: "bracelet-1",
    name: "Gold Chain Bracelet",
    pattern: "gradient",
    imageIndex: 2,
    imageUrl:"https://images.pexels.com/photos/13645592/pexels-photo-13645592.jpeg"
  }
];

export default function JewelryPreview({ className }: JewelryPreviewProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
  const interval = setInterval(() => {
    setActiveIndex((prev) => (prev + 1) % jewelryItems.length);
  }, 3000);
  return () => clearInterval(interval);
}, [jewelryItems.length]);



  return (
    <section className={cn("py-16 md:py-24 bg-background", className)}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Our Signature Pieces</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our most elegant designs, crafted with attention to detail and timeless sophistication.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Gallery */}
          <div className="relative h-[500px] flex items-center justify-center">
            {jewelryItems.map((item, index) => (
              <div
                key={item.id}
                className={cn(
                  "absolute transition-all duration-700 ease-in-out w-full max-w-lg",
                  index === activeIndex ? "opacity-100 scale-100 z-20" :
                  index === (activeIndex + 1) % jewelryItems.length ? "opacity-60 scale-90 translate-x-20 z-10" :
                  "opacity-40 scale-80 -translate-x-20 z-0"
                )}
              >
                <PlaceholderImage
                  text={item.name}
                  src={item?.imageUrl}
                  className="w-full aspect-[3/4] shadow-lg"
                  bgColor="bg-primary/10"
                  pattern="gradient"
                  imageIndex={item.imageIndex}
                />
              </div>
            ))}

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-30">
              {jewelryItems.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all",
                    index === activeIndex ? "bg-primary scale-125" : "bg-primary/30"
                  )}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View jewelry item ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h3 className="heading-md mb-4">{jewelryItems[activeIndex].name}</h3>
            <p className="text-muted-foreground mb-6">
              Every piece in our collection tells a story of elegance and craftsmanship.
              Our signature designs blend timeless appeal with contemporary aesthetics,
              creating jewelry that makes a statement without saying a word.
            </p>
            <p className="text-muted-foreground mb-8">
              Crafted with attention to the finest details, our jewelry pieces are made
              to last and designed to be the perfect accompaniment to your unique style.
            </p>
            <div className="flex space-x-4">

              <Button className="elegant-button-filled">
              <Link to="/collections">
              View Collection
              </Link>
              </Button>
              <Button variant="outline" className="elegant-button-outline">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}