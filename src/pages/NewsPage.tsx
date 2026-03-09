import React from "react";
import PageTransition from "../components/shared/PageTransition";
import News from "../components/News";

export default function NewsPage() {
  return (
    <PageTransition>
      <News />
    </PageTransition>
  );
}
