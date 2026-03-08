import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Features from "./components/Features";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Architecture from "./components/Architecture";
import DashboardPreview from "./components/Dashboard";
import Comparison from "./components/Comparison";
import Testimonials from "./components/Testimonials";
import TechStack from "./components/TechStack";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#050510] text-gray-200 overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <Services />
      <HowItWorks />
      <Architecture />
      <DashboardPreview />
      <Comparison />
      <Testimonials />
      <TechStack />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
