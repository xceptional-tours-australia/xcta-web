import React from "react";
import "./style.css";
import Hero from "@/components/Hero/Hero";
import AboutSection from "@/components/AboutSection/AboutSection";
import Advantages from "@/components/Advantages/Advantages";
import ServiceSection from "@/components/ServiceSection/ServiceSection";
import TestimoniSection from "@/components/TestimoniSection/TestimoniSection";

export default function Home() {
  return (
    <main className="home">
      <Hero />
      <AboutSection />
      <Advantages />
      <ServiceSection />
      <TestimoniSection />
    </main>
  );
}
