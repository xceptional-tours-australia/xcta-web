import React from "react";
import "./style.css";
import { getServices } from "@/lib/strapi";
import OurServiceCard from "@/components/OurServiceCard/OurServiceCard";
import Banner from "@/components/Banner/Banner";
export const fetchCache = 'force-no-store';

export default async function OurServices() {
  let services = await getServices(null);
  
  return (
    <main className="oservices">
      <Banner />

      <section className="our-service-item">
        <div className="section-wrapper">
          <div className="ourservices__cards">
            {services.map((data : any, index : any) => (
              <OurServiceCard data={data} key={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
