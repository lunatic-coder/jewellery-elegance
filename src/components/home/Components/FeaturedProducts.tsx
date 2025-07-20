import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/product/Components/ProductCard";
import { featuredProducts } from "@/lib/data";

export default function FeaturedProducts() {
  return (
    <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>

      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Featured Collection</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most coveted pieces, selected for their exceptional design and craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <div key={product.id} className="transform transition-all duration-500 hover:-translate-y-2">
              <ProductCard
                product={product}
                variant="featured"
                className="shadow-md hover:shadow-xl transition-shadow"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="elegant-button-filled px-10 py-6 text-base">
            <Link to="/shop">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}