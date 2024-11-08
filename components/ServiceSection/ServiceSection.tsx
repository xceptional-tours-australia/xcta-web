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
  
  // services = services.slice(0, 4);
  // services.push({
  //   id: -1,
  //   icon: "",
  //   title: "View All Services",
  //   description: "",
  // });

  // console.log(services)

  return (
    <section className="section-wrapper">
      {/* <SectionTitle title="Our Services" position="end" /> */}
      <div className="service">
        <span className="title">Our Services</span>

        {/* <div className="service-section__container">
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
        </div> */}

        <div className="service__boxes">
          <div className="service__container">
            <div className="service__wrapper-1">
              {services.slice(-2).map((service : any, i : number) => (
                <Sheet key={service.id}>
                  <SheetTrigger asChild>
                    <ServiceCard data={service} />
                  </SheetTrigger>
                  <ServiceCardDetail title={service.title} />
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
                <ServiceCardDetail title={service.title} />
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
