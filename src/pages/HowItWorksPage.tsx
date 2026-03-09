import React from "react";
import PageTransition from "../components/shared/PageTransition";
import HowItWorks from "../components/HowItWorks";
import Architecture from "../components/Architecture";
import Testimonials from "../components/Testimonials";

export default function HowItWorksPage() {
  return (
    <PageTransition>
      <div className="pt-24">
        <HowItWorks />
        <Architecture />
        <Testimonials />
      </div>
    </PageTransition>
  );
}
