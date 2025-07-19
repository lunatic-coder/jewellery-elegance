import { useState } from "react";
import { useParams } from "react-router-dom";
import { Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductGrid from "@/components/product/ProductGrid";
import { products, categories, getProductsByCategory } from "@/lib/data";

export default function ShopPage() {
  const { categoryId } = useParams();
  const [productsToDisplay, setProductsToDisplay] = useState(
    categoryId ? getProductsByCategory(categoryId) : products
  );
  const currentCategory = categoryId
    ? categories.find(cat => cat.id === categoryId)
    : null;

  // This would be expanded with actual filter functionality
  const handleFilter = () => {
    // Filter logic would go here
    console.log("Filtering products");
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 md:pt-32">
        {/* Page Header */}
        <div className="bg-secondary py-8 md:py-12 mb-8">
          <div className="container-custom">
            <h1 className="heading-lg mb-4">
              {currentCategory ? currentCategory.name : "All Products"}
            </h1>
            {currentCategory && (
              <p className="text-muted-foreground max-w-3xl">
                {currentCategory.description}
              </p>
            )}
          </div>
        </div>

        {/* Product Grid with Filter */}
        <div className="container-custom pb-16 md:pb-24">
          <div className="flex justify-between items-center mb-8">
            <div>
              <p className="text-muted-foreground">
                Showing {productsToDisplay.length} products
              </p>
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <SlidersHorizontal className="h-4 w-4" />
                  <span>Filter & Sort</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-medium">Filters</h3>
                    <Button variant="ghost" className="text-sm">Clear all</Button>
                  </div>

                  <div className="space-y-6 flex-1 overflow-auto">
                    {/* Price Range Filter */}
                    <div>
                      <h4 className="font-medium mb-3">Price Range</h4>
                      {/* Price range component would go here */}
                      <div className="grid grid-cols-2 gap-4 mb-2">
                        <div>
                          <label className="text-xs text-muted-foreground mb-1 block">Min</label>
                          <Input type="number" placeholder="$0" />
                        </div>
                        <div>
                          <label className="text-xs text-muted-foreground mb-1 block">Max</label>
                          <Input type="number" placeholder="$500" />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Categories Filter */}
                    <div>
                      <h4 className="font-medium mb-3">Categories</h4>
                      <div className="space-y-2">
                        {categories.map(category => (
                          <div key={category.id} className="flex items-center">
                            <Checkbox id={category.id} />
                            <label htmlFor={category.id} className="ml-2 text-sm cursor-pointer">
                              {category.name}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    {/* Material Filter - Example */}
                    <div>
                      <h4 className="font-medium mb-3">Material</h4>
                      <div className="space-y-2">
                        {["Gold Plated", "Silver Plated", "Rose Gold", "Pearl", "Crystal"].map(material => (
                          <div key={material} className="flex items-center">
                            <Checkbox id={material.toLowerCase().replace(/\s+/g, '-')} />
                            <label
                              htmlFor={material.toLowerCase().replace(/\s+/g, '-')}
                              className="ml-2 text-sm cursor-pointer"
                            >
                              {material}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <Button className="w-full" onClick={handleFilter}>
                      Apply Filters
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <ProductGrid products={productsToDisplay} columns={4} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="border rounded px-3 py-2 w-full text-sm focus:outline-none focus:ring-1 focus:ring-primary"
      {...props}
    />
  );
}

function Checkbox({ id, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="checkbox"
      id={id}
      className="rounded border-gray-300 text-primary focus:ring-primary"
      {...props}
    />
  );
}