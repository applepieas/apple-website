import NavBar from "./components/NavBar"
import HeroSection from "./sections/HeroSection"
import ProductSection from "./sections/ProductSection"

const page = () => {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <ProductSection />
    </main>
  )
}

export default page