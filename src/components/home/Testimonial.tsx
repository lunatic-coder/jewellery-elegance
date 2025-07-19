import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "I receive compliments every time I wear the pearl pendant necklace. The quality is exceptional, and it looks far more expensive than it is.",
    name: "Sophia Roberts",
    rating: 5
  },
  {
    id: 2,
    text: "The crystal chandelier earrings are stunning and catch the light beautifully. They're surprisingly lightweight and comfortable to wear all day.",
    name: "Emma Thompson",
    rating: 5
  },
  {
    id: 3,
    text: "Elegant pieces that look authentic. The twisted gold bangle has become my go-to accessory for both casual and formal occasions.",
    name: "Olivia Chen",
    rating: 5
  },
  {
    id: 4,
    text: "The statement cocktail ring is a conversation starter. I've never owned jewelry that garners so many compliments. Worth every penny!",
    name: "Isabella Garcia",
    rating: 4
  }
];

export default function Testimonial() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Read about experiences from our satisfied customers and their love for our jewelry.
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-4">
                <Card className="h-full border-none shadow-lg">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex text-amber-500 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-current"
                          fill={i < testimonial.rating ? "currentColor" : "none"}
                        />
                      ))}
                    </div>

                    <blockquote className="flex-1 text-lg mb-4 italic">
                      "{testimonial.text}"
                    </blockquote>

                    <footer className="text-right">
                      <cite className="not-italic font-medium">
                        {testimonial.name}
                      </cite>
                    </footer>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
    </section>
  );
}