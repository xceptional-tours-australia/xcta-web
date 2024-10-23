import "./style.css";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { services as serviceData } from "@/lib/dummyData";
import ServiceCardDetail from "./ServiceCardDetail/ServiceCardDetail";
import SectionTitle from "../global/SectionTitle/SectionTitle";
import ServiceCard from "./ServiceCard/ServiceCard";
import { getServices } from "@/lib/strapi";

export default async function ServiceSection() {
  let services = await getServices();
  services = services.slice(0, 4);
  services.push({
    id: -1,
    icon: "",
    title: "View All Services",
    description: "",
  });

  return (
    <section className="section-wrapper pb-24">
      <SectionTitle title="Our Services" position="end" />
      <div className="service-section__container">
        {services.map((data, i) =>
          i != services.length - 1 ? (
            <Sheet key={i}>
              <SheetTrigger asChild>
                <ServiceCard data={data} index={i} />
              </SheetTrigger>
              <ServiceCardDetail title={data.title} />
            </Sheet>
          ) : (
            <Link href="our-services" key={i}>
              <ServiceCard data={data} index={i} />
            </Link>
          )
        )}
      </div>
    </section>
  );
}
