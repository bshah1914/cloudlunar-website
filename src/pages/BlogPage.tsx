import React from "react";
import PageTransition from "../components/shared/PageTransition";
import Blog from "../components/Blog";

export default function BlogPage() {
  return (
    <PageTransition>
      <Blog />
    </PageTransition>
  );
}
