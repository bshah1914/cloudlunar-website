import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import FeaturesPage from "./pages/FeaturesPage";
import DashboardPage from "./pages/DashboardPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import PricingPage from "./pages/PricingPage";
import DownloadPage from "./pages/DownloadPage";
import DocsPage from "./pages/DocsPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-[#f8fafc] dark:bg-[#030712] text-gray-700 dark:text-gray-300 overflow-x-hidden noise-bg transition-colors duration-300">
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/how-it-works" element={<HowItWorksPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/download" element={<DownloadPage />} />
              <Route path="/docs" element={<DocsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
