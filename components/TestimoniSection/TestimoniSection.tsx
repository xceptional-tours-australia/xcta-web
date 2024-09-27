import SectionTitle from "../global/SectionTitle/SectionTitle";
import TestimoniCard from "./TestimoniCard/TestimoniCard";
import "./style.css";

export default function TestimoniSection() {
  return (
    <section className="section-wrapper py-[10rem]">
      <SectionTitle title="What They're Saying About Us" />
      <div className="testimoni-section__container">
        <TestimoniCard />
        <TestimoniCard />
        <TestimoniCard />
      </div>
    </section>
  );
}
