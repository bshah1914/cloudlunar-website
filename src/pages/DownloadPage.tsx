import React from "react";
import PageTransition from "../components/shared/PageTransition";
import GetStarted from "../components/GetStarted";

export default function DownloadPage() {
  return (
    <PageTransition>
      <div className="pt-24">
        <GetStarted />
      </div>
    </PageTransition>
  );
}
