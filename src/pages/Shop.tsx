import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AllProductList from "@/components/product/Components/AllProductList";

export default function ShopPage() {


  return (
    <div className="min-h-screen">
      <Header />
      <AllProductList  />
      <Footer />
    </div>
  );
}

