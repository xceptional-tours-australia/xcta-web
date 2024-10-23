import React from "react";
import "./style.css";
import { getServices } from "@/lib/strapi";
import OurServiceCard from "@/components/OurServiceCard/OurServiceCard";

export default async function OurServices() {
  let services = await getServices();
  return (
    <main className="oservices">
      <section className="our-service-item">
        <div className="section-wrapper">
          <div className="grid grid-cols-3 gap-4">
            {services.map((data, index) => (
              <OurServiceCard data={data} key={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
