import IntroScreen from "@/components/IntroScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedWork from "@/components/FeaturedWork";
import TechStack from "@/components/TechStack";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative selection:bg-blue-600 selection:text-white">
      {/* Scroll Progress Bar & Floating Top Button */}
      <ScrollProgress />

      {/* 3-4s Intro Greeting with Middle Split / Curtain Open Animation */}
      <IntroScreen />

      {/* Floating Centered Pill Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Me Section (2 Years Experience & Freelance Bio) */}
      <About />

      {/* Shipped Projects / Featured Work Section */}
      <FeaturedWork />

      {/* Tech Stack */}
      <TechStack />

      {/* Pricing Services */}
      <Pricing />

      {/* Contact Form */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
