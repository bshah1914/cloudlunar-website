import React from "react";
import PageTransition from "../components/shared/PageTransition";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";

export default function PricingPage() {
  return (
    <PageTransition>
      <div className="pt-24">
        <Pricing />
        <Testimonials />
      </div>
    </PageTransition>
  );
}
