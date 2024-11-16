import "./style.css";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { services as serviceData } from "@/lib/dummyData";
import ServiceCardDetail from "./ServiceCardDetail/ServiceCardDetail";
import SectionTitle from "../global/SectionTitle/SectionTitle";
import ServiceCard from "./ServiceCard/ServiceCard";
import { getServices } from "@/lib/strapi";
export const fetchCache = 'force-no-store';

export default async function ServiceSection() {
  let services = await getServices(null);
  
  return (
    <section className="section-wrapper">
      {/* <SectionTitle title="Our Services" position="end" /> */}
      <div className="service">
        <span className="title">Our Services</span>

        <div className="service__boxes">
          <div className="service__container">
            <div className="service__wrapper-1">
              {services.slice(-2).map((service : any, i : number) => (
                <Sheet key={service.id}>
                  <SheetTrigger asChild>
                    <ServiceCard data={service} />
                  </SheetTrigger>
                  <ServiceCardDetail data={service} />
                </Sheet>
              ))}
            </div>
          </div>

          <div className="service__wrapper-2">
            {services.slice(-4, -2).map((service : any, i : number) => (
              <Sheet key={i}>
                <SheetTrigger asChild>
                  <ServiceCard data={service} />
                </SheetTrigger>
                <ServiceCardDetail data={service} />
              </Sheet>
            ))}

            <Link href="our-services">
              <ServiceCard />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
