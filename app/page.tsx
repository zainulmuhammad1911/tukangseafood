import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollStory from "@/components/ScrollStory";
import ProductShowcase from "@/components/ProductShowcase";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#050505]">
      <Navbar />
      <Hero />
      <ScrollStory />
      <ProductShowcase />
      <Features />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
