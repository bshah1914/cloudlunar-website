import React from "react";
import PageTransition from "../components/shared/PageTransition";
import Documentation from "../components/Documentation";
import FAQ from "../components/FAQ";

export default function DocsPage() {
  return (
    <PageTransition>
      <div className="pt-24">
        <Documentation />
        <FAQ />
      </div>
    </PageTransition>
  );
}
