import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Collections from "@/components/collections/Components/Collections";




export default function CollectionsPage() {
  return (
    <div className="min-h-screen">
      <Header />
       <Collections />
      <Footer />
    </div>
  );
}