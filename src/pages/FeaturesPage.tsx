import React from "react";
import PageTransition from "../components/shared/PageTransition";
import Features from "../components/Features";
import Services from "../components/Services";
import Comparison from "../components/Comparison";

export default function FeaturesPage() {
  return (
    <PageTransition>
      <div className="pt-24">
        <Features />
        <Services />
        <Comparison />
      </div>
    </PageTransition>
  );
}
