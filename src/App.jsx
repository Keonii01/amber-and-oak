import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PastryBanner from "./components/PastryBanner";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Visit from "./components/Visit";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function Placeholder({ id, label }) {
  return (
    <section id={id} className="scroll-mt-20 min-h-[80vh] p-margin border-b border-outline-variant">
      <h2 className="font-headline-lg text-headline-lg">{label}</h2>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main className="w-full pt-20 bg-surface">
        <Hero />
        <PastryBanner />
        <Menu />
        <Gallery />
        <Visit />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}