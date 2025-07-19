import { Link } from "react-router-dom";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { categories } from "@/lib/data";


export default function CategoryShowcase() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Explore Our Categories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our carefully curated collection of exquisite jewelry pieces, designed to complement your unique style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/shop/${category.id}`}
              className="group block"
            >
              <div className="overflow-hidden rounded-md mb-4 aspect-[4/5] shadow-xl hover:shadow-lg transition-shadow duration-300">
                {category.image ? (
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <PlaceholderImage
                    text={category.name}
                    className="w-full h-full"
                    pattern="gradient"
                    imageIndex={index}
                    textColor="text-primary"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-lg font-medium">View {category.name}</span>
                </div>
              </div>
              <h3 className="text-xl font-medium mb-1 group-hover:text-primary transition-colors">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}