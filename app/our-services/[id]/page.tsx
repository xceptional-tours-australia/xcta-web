import ServiceDetail from "@/components/ServiceDetail/ServiceDetail";
import { getServices } from "@/lib/strapi";
import React from "react";

export default async function ServiceDetails({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  let services = await getServices();
  const id = (await params).id

  const filteredData = services.find((service : any) => service.id === parseInt(id));
  const currentIndex = services.findIndex((service: any) => service.id === parseInt(id));
  const nextData = currentIndex !== -1 && currentIndex < services.length - 1
    ? {id: services[currentIndex + 1].id, title: services[currentIndex + 1].title}
    : null;

  // console.log("CUSTOMER = ", services);
  // console.log("CURRENT ID = ", id);
  // console.log("NEXT ID = ", nextData);

  return (
    <main className="service-detail">
      <ServiceDetail data={filteredData} nextData={nextData} />
    </main>
  );
}
