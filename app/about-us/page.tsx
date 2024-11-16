import React from "react";
import "./style.css";
import Banner from "@/components/Banner/Banner";
import OurMission from "@/components/OurMission/OurMission";
import Advantages from "@/components/Advantages/Advantages";
import ServiceSection from "@/components/ServiceSection/ServiceSection";
import CallToActionAboutUs from "@/components/CallToActionAboutUs/CallToActionAboutUs";

export default function AboutUs() {
  return (
    <main className="about-us">
      <Banner />
      <div className="py-[10rem]">
        <OurMission />
      </div>
      <Advantages />
      <ServiceSection />
      <div className="py-[20rem] min-tablet:py-[30rem]">
        <CallToActionAboutUs />
      </div>
    </main>
  );
}
