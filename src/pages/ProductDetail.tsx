import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronRight, Minus, Plus, Heart, ShoppingBag, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { getProductById, getProductsByCategory } from "@/lib/data";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductGrid from "@/components/product/ProductGrid";
import { ProductImageZoom } from "@/components/product/ProductImageZoom";


export default function ProductDetailPage() {
  const { productId } = useParams();
  const product = productId ? getProductById(productId) : null;


  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  // If product not found
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The product you're looking for doesn't seem to exist.
          </p>
          <Button asChild>
            <Link to="/shop">Return to Shop</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Get similar products
  const similarProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  // Handle quantity changes
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  // Handle add to cart
  const handleAddToCart = () => {
    // In a real app, this would add the product to a cart store
    console.log(`Adding ${quantity} of ${product.name} to cart`);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="flex items-center text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link to="/shop" className="hover:text-primary">Shop</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link to={`/shop/${product.category}`} className="hover:text-primary capitalize">
              {product.category}
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span>{product.name}</span>
          </nav>

          {/* Product Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="max-w-md mx-auto p-4">
              <ProductImageZoom
                product={product}
                currentImageIndex={currentImageIndex}
                setCurrentImageIndex={setCurrentImageIndex}
              />

              <div className="mt-6 text-sm text-gray-500">
                <p><strong>Features:</strong></p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Hover zoom with lens effect</li>
                  <li>Click for full-screen zoom modal</li>
                  <li>Keyboard navigation (arrows, escape)</li>
                  <li>Thumbnail gallery navigation</li>
                  <li>Responsive design</li>
                </ul>
              </div>
            </div>


            {/* Product Info */}
            <div>
              <h1 className="heading-lg mb-2">{product.name}</h1>

              <p className="text-2xl mb-4">${product.price.toFixed(2)}</p>

              <p className="text-muted-foreground mb-6">
                {product.description}
              </p>

              {/* Stock Info */}
              <div className="mb-6">
                <p className={`text-sm ${product.stock > 0 ? "text-green-600" : "text-red-600"}`}>
                  {product.stock > 0 ? "In Stock" : "Out of Stock"}
                </p>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-6 mb-6">
                <span className="text-sm font-medium">Quantity</span>
                <div className="flex items-center border rounded-md">
                  <button
                    onClick={decrementQuantity}
                    className="px-3 py-2 hover:bg-muted"
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 border-x">{quantity}</span>
                  <button
                    onClick={incrementQuantity}
                    className="px-3 py-2 hover:bg-muted"
                    disabled={quantity >= product.stock}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  onClick={handleAddToCart}
                  className="elegant-button-filled gap-2"
                  disabled={addedToCart}
                >
                  {addedToCart ? (
                    <>
                      <Check className="h-4 w-4" />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="h-4 w-4" />
                      Add to Cart
                    </>
                  )}
                </Button>
                <Button variant="outline" className="elegant-button-outline gap-2">
                  <Heart className="h-4 w-4" />
                  Add to Wishlist
                </Button>
              </div>

              {/* Product Details */}
              <Tabs defaultValue="details" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="material">Material</TabsTrigger>
                  <TabsTrigger value="care">Care</TabsTrigger>
                </TabsList>
                <TabsContent value="details" className="pt-4">
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    {product.details?.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="material" className="pt-4">
                  <p className="text-sm">{product.material}</p>
                </TabsContent>
                <TabsContent value="care" className="pt-4">
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    {product.careInstructions?.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Similar Products */}
          {similarProducts.length > 0 && (
            <>
              <Separator className="my-16" />

              <div className="mb-16">
                <h2 className="heading-md mb-8 text-center">You May Also Like</h2>
                <ProductGrid products={similarProducts} columns={4} />
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}