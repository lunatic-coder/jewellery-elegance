import CategoryShowcase from "./CategoryShowcase"
import FeaturedProducts from "./FeaturedProducts"
import Hero from "./Hero"
import JewelryPreview from "./JewelryPreview"
import NewArrivals from "./NewArrivals"
import Newsletter from "./Newsletter"
import Testimonial from "./Testimonial"



function Home(){

    return(
        <main>
        <Hero />
        <CategoryShowcase />
        <JewelryPreview />
        <FeaturedProducts />
        <NewArrivals />
        <Testimonial />
        <Newsletter />
      </main>
    )

}

export default Home