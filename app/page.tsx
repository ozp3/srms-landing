import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import HowItWorks from "@/components/sections/HowItWorks";
import ProductShowcase from "@/components/sections/ProductShowcase";
import DemoShowcase from "@/components/sections/DemoShowcase";
import Features from "@/components/sections/Features";
import AIPipeline from "@/components/sections/AIPipeline";
import ApplicationAreas from "@/components/sections/ApplicationAreas";
import Team from "@/components/sections/Team";
import References from "@/components/sections/References";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <ProductShowcase />
      <DemoShowcase />
      <Features />
      <AIPipeline />
      <ApplicationAreas />
      <Team />
      <References />
      <Contact />
      <Footer />
    </main>
  );
}
