import { Link } from "react-router-dom";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Product } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ShoppingBag, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
  variant?: "default" | "featured";
  className?: string;
}

export default function ProductCard({
  product,
  variant = "default",
  className,
}: ProductCardProps) {
  const isFeatured = variant === "featured";
  const productIdNumber = parseInt(product.id.replace(/\D/g, ''), 10) || 0;

  return (
    <div className={cn(
      "group",
      className
    )}>
      <Link to={`/product/${product.id}`} className="block overflow-hidden relative">
        <div className={cn(
          "relative overflow-hidden mb-4",
          isFeatured ? "aspect-[3/4]" : "aspect-square",
        )}>
          {product.images && product.images.length > 0 ? (
            <img
              src={product.images[0]}
              alt={product.name}
              className={cn(
                "object-cover w-full h-[400px] shadow-xl rounded-md transition-all duration-700 shadow-md",
                "group-hover:scale-105 group-hover:shadow-xl"
              )}
            />
          ) : (
            <PlaceholderImage
              width={isFeatured ? 600 : 400}
              height={isFeatured ? 800 : 400}
              text={product.name}
              className="w-full h-full"
              pattern="gradient"
              imageIndex={productIdNumber % 5}
            />
          )}

          {product.new && (
            <div className="absolute top-2 right-2 bg-accent text-accent-foreground text-xs uppercase tracking-wider py-1 px-2 rounded">
              New
            </div>
          )}

          {/* Quick action buttons that appear on hover */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="flex space-x-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <Button size="icon" variant="secondary" className="rounded-full h-10 w-10 bg-white hover:bg-primary hover:text-white">
                <ShoppingBag className="h-5 w-5" />
                <span className="sr-only">Add to cart</span>
              </Button>
              <Button size="icon" variant="secondary" className="rounded-full h-10 w-10 bg-white hover:bg-primary hover:text-white">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Add to wishlist</span>
              </Button>
            </div>
          </div>
        </div>
      </Link>

      <div className="text-center">
        <h3 className={cn(
          "font-medium transition-colors elegant-hover group-hover:text-primary",
          isFeatured ? "text-lg" : "text-base"
        )}>
          <Link to={`/product/${product.id}`}>
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-muted-foreground">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}