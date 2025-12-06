import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
// import FeaturesSection from "./sections/FeaturesSection"
import HeroSection from "./sections/HeroSection"
import HighlightsSection from "./sections/HighlightsSection"
import PerformanceSection from "./sections/PerformanceSection"
import ProductSection from "./sections/ProductSection"
import ShowcaseSection from "./sections/ShowcaseSection"

const page = () => {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <ProductSection />
      <ShowcaseSection />
      <PerformanceSection />

      <HighlightsSection />
      <Footer />
    </main>
  )
}

export default page