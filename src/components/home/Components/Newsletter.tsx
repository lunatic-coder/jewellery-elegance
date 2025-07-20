import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-6">Join Our Community</h2>
          <p className="text-lg mb-8 text-primary-foreground/80">
            Subscribe to receive exclusive updates, early access to new collections, and special offers.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="h-12 bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60"
              required
            />
            <Button type="submit" className="h-12 bg-white text-primary hover:bg-white/90">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}