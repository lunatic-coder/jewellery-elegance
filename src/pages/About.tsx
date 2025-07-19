import { Separator } from "@/components/ui/separator";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 md:pt-32 pb-16 md:pb-24">
        {/* Hero Section */}
        <div className="bg-secondary py-16 md:py-24 mb-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-lg mb-6">Our Story</h1>
              <p className="text-lg text-muted-foreground">
                Elegance was founded with a vision to create beautiful, high-quality artificial jewelry 
                that makes every woman feel confident and sophisticated.
              </p>
            </div>
          </div>
        </div>
        
        <div className="container-custom">
          {/* Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
            <div>
              <h2 className="heading-md mb-6">Our Mission</h2>
              <p className="mb-4">
                At Elegance, we believe that luxury shouldn't come with a prohibitive price tag. 
                Our mission is to create exquisite jewelry pieces that combine timeless elegance with 
                contemporary design, making luxury accessible to every woman.
              </p>
              <p>
                Each piece in our collection is thoughtfully designed and meticulously crafted using 
                high-quality materials to ensure beauty, durability, and comfort. We're committed to 
                providing jewelry that not only enhances your style but also stands the test of time.
              </p>
            </div>
            <div>
              <PlaceholderImage 
                text="Our Mission" 
                className="w-full aspect-[4/3] rounded-md"
                bgColor="bg-primary/10"
              />
            </div>
          </div>
          
          {/* Values */}
          <div className="mb-16 md:mb-24">
            <h2 className="heading-md mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-secondary rounded-lg p-6 text-center">
                <h3 className="text-xl font-medium mb-3">Quality</h3>
                <p>
                  We never compromise on quality. Every piece undergoes rigorous quality checks to 
                  ensure excellent craftsmanship and durability.
                </p>
              </div>
              <div className="bg-secondary rounded-lg p-6 text-center">
                <h3 className="text-xl font-medium mb-3">Elegance</h3>
                <p>
                  We create timeless pieces that embody sophistication and grace, designed to 
                  complement your unique style and personality.
                </p>
              </div>
              <div className="bg-secondary rounded-lg p-6 text-center">
                <h3 className="text-xl font-medium mb-3">Sustainability</h3>
                <p>
                  We're committed to responsible practices, from ethical sourcing of materials to 
                  eco-friendly packaging and production processes.
                </p>
              </div>
            </div>
          </div>
          
          <Separator className="mb-16 md:mb-24" />
          
          {/* Craftsmanship */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
            <div className="order-2 lg:order-1">
              <PlaceholderImage 
                text="Our Craftsmanship" 
                className="w-full aspect-[4/3] rounded-md"
                bgColor="bg-accent/30"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="heading-md mb-6">Our Craftsmanship</h2>
              <p className="mb-4">
                Each Elegance piece is a testament to superior craftsmanship and attention to detail. 
                Our skilled artisans blend traditional techniques with modern technology to create 
                jewelry that's both beautiful and durable.
              </p>
              <p>
                We use high-quality materials like premium crystals, freshwater pearls, and 
                hypoallergenic metals with gold, silver, and rose gold plating to ensure our 
                pieces retain their luster and elegance through years of wear.
              </p>
            </div>
          </div>
          
          {/* Team */}
          <div className="text-center mb-16">
            <h2 className="heading-md mb-6">Meet Our Team</h2>
            <p className="max-w-3xl mx-auto mb-12">
              Behind every beautiful piece of jewelry is our passionate team of designers, 
              craftspeople, and jewelry enthusiasts who bring our vision to life.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { name: "Emma Taylor", role: "Founder & Creative Director" },
                { name: "Sophia Chen", role: "Head of Design" },
                { name: "Olivia Patel", role: "Materials Specialist" },
                { name: "Isabella Garcia", role: "Marketing Director" }
              ].map(member => (
                <div key={member.name} className="text-center">
                  <PlaceholderImage 
                    className="w-full aspect-square rounded-full mb-4 mx-auto max-w-[200px]" 
                    text={member.name.split(' ')[0][0] + member.name.split(' ')[1][0]}
                    textColor="text-primary"
                    bgColor="bg-muted"
                  />
                  <h3 className="font-medium text-lg">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}