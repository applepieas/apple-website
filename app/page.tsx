import NavBar from "./components/NavBar"
import HeroSection from "./sections/HeroSection"
import ProductSection from "./sections/ProductSection"
import ShowcaseSection from "./sections/ShowcaseSection"

const page = () => {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <ProductSection />
      <ShowcaseSection />
    </main>
  )
}

export default page