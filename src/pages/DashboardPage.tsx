import React from "react";
import PageTransition from "../components/shared/PageTransition";
import DashboardPreview from "../components/Dashboard";

export default function DashboardPage() {
  return (
    <PageTransition>
      <div className="pt-24">
        <DashboardPreview />
      </div>
    </PageTransition>
  );
}
