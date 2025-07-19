import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductGrid from "@/components/product/ProductGrid";
import { newArrivals } from "@/lib/data";

export default function NewArrivals() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">New Arrivals</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Be the first to explore our latest additions, fresh from the design studio.
          </p>
        </div>
        
        <ProductGrid products={newArrivals} columns={4} className="mb-12" />
        
        <div className="text-center">
          <Button asChild className="elegant-button-outline">
            <Link to="/collections/new-arrivals">View All New Arrivals</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}