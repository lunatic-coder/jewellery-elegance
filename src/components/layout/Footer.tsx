import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-secondary bg-opacity-10 pt-16 pb-8">
      <div className="container-custom">
        {/* Newsletter */}
        <div className="mb-16 mx-auto max-w-md text-center">
          <h2 className="heading-md mb-4">Join Our Newsletter</h2>
          <p className="text-muted-foreground mb-6">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <div className="flex space-x-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-12"
            />
            <Button className="elegant-button-filled h-12">Subscribe</Button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="font-semibold text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop/necklaces" className="text-muted-foreground hover:text-primary transition-colors">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link to="/shop/earrings" className="text-muted-foreground hover:text-primary transition-colors">
                  Earrings
                </Link>
              </li>
              <li>
                <Link to="/shop/bracelets" className="text-muted-foreground hover:text-primary transition-colors">
                  Bracelets
                </Link>
              </li>
              <li>
                <Link to="/shop/rings" className="text-muted-foreground hover:text-primary transition-colors">
                  Rings
                </Link>
              </li>
              <li>
                <Link to="/collections" className="text-muted-foreground hover:text-primary transition-colors">
                  Collections
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/about/materials" className="text-muted-foreground hover:text-primary transition-colors">
                  Materials
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-muted-foreground hover:text-primary transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Customer Care</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-muted-foreground hover:text-primary transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/care" className="text-muted-foreground hover:text-primary transition-colors">
                  Care Instructions
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </div>
            <p className="text-muted-foreground text-sm">
              Email: contact@elegancejewelry.com
              <br />
              Phone: +1 (800) 555-1234
            </p>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Elegance Jewelry. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}