import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Mock collections data
const collections = [
  {
    id: "new-arrivals",
    name: "New Arrivals",
    description: "Discover our latest additions, fresh from the design studio.",
    image: "https://images.unsplash.com/photo-1599458349289-18f0ee82e6ed?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "bestsellers",
    name: "Bestsellers",
    description: "Our most popular pieces, loved by customers worldwide.",
    image: "https://images.unsplash.com/photo-1633555234047-192d10238f5f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "timeless-elegance",
    name: "Timeless Elegance",
    description: "Classic designs that never go out of style.",
    image: "https://plus.unsplash.com/premium_photo-1681276169830-7bd1678b0c15?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "bridal",
    name: "Bridal Collection",
    description: "Stunning pieces for your special day.",
    image: "https://plus.unsplash.com/premium_photo-1723563578891-e0972abf64e0?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "statement-pieces",
    name: "Statement Pieces",
    description: "Bold and eye-catching jewelry to elevate any outfit.",
    image: "https://plus.unsplash.com/premium_photo-1661508671520-1f9efb454036?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "minimalist",
    name: "Minimalist",
    description: "Simple yet sophisticated designs for everyday elegance.",
    image: "https://images.unsplash.com/photo-1623699655000-b4eb2011cef4?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function CollectionsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 md:pt-32 pb-16 md:pb-24">
        {/* Hero Section */}
        <div className="bg-secondary py-16 md:py-24 mb-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-lg mb-6">Our Collections</h1>
              <p className="text-lg text-muted-foreground">
                Explore our carefully curated collections, each with a unique story and style.
                From timeless classics to bold statement pieces, find jewelry that speaks to you.
              </p>
            </div>
          </div>
        </div>

        {/* Collections Grid */}
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <Link
                key={collection.id}
                to={`/collections/${collection.id}`}
                className="group block"
              >
                <div className="overflow-hidden rounded-md mb-4 aspect-[4/3]">
                  {collection.image ? (
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <PlaceholderImage
                      text={collection.name}
                      className="w-full h-full"
                      bgColor="bg-primary/10"
                    />
                  )}
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                      {collection.name}
                    </h2>
                    <p className="text-muted-foreground">{collection.description}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="mt-1 group-hover:translate-x-1 transition-transform"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}