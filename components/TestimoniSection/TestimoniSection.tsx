import { testimoniData } from "@/lib/dummyData";
import SectionTitle from "../global/SectionTitle/SectionTitle";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import TestimoniCard from "./TestimoniCard/TestimoniCard";
import "./style.css";
import { getTestimonials } from "@/lib/strapi";

export default async function TestimoniSection() {
  let testimonials = await getTestimonials();

  return (
    <section className="section-wrapper py-[10rem]">
      <SectionTitle title="What They're Saying About Us" />
      
      <ScrollArea className="w-full pb-4">
        <div className="testimoni-section__container">
          {testimonials.map((data : any, index : any) => (
            <TestimoniCard key={index} data={data} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}
