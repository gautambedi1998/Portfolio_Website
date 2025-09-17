import About from "./sections/about";
import Footer from "./sections/footer";
import Hero from "./sections/hero";
import Navbar from "./sections/navbar";
import UnderConstruction from "./sections/underconstruction";

export default function Home() {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <UnderConstruction />
      <Footer />
    </div>
  );
}
