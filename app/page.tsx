import React from 'react'
import "./style.css"
import Hero from '@/components/Hero/Hero'
import AboutSection from '@/components/AboutSection/AboutSection';

export default function Home() {
  return (
    <main className="home">
      <Hero />
      <AboutSection/>
    </main>
  );
}
