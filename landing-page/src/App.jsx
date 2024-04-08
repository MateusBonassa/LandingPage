import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from './components/Footer'
export default function App() {
  return (
    <>
    <Navbar/>
    <div className=" max-w-7xl mx-auto pt-20 px-7">
      <HeroSection/>
      <FeatureSection/>
      <Work/>
      <Pricing/>
      <Testimonials/>
      <Footer/>
    </div>
  
    </>
  )
}