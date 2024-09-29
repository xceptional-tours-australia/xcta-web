import React from "react";
import "./style.css";
import About from "@/components/About/About";
import OurCommitmentSection from "@/components/OurCommitmentSection/OurCommitmentSection";

export default function AboutUs() {
  return (
    <main className="about-us">
      <About />
      <OurCommitmentSection />
    </main>
  );
}
