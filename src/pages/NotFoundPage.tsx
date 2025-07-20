import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="flex items-center justify-center pt-32 pb-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="heading-lg mb-4">404</h1>
            <p className="text-2xl font-light mb-6">Page Not Found</p>
            <p className="text-muted-foreground mb-8">
              The page you are looking for might have been removed, had its name changed,
              or is temporarily unavailable.
            </p>
            <Button asChild className="elegant-button-filled">
              <Link to="/">Return to Homepage</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}