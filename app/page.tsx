import Hero from "./sections/hero";
import Navbar from "./sections/navbar";

export default function Home() {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
    </div>
  );
}
