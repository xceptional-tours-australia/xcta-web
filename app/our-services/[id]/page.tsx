import ServiceDetail from "@/components/ServiceDetail/ServiceDetail";
import { getServices } from "@/lib/strapi";
import React from "react";
export const fetchCache = 'force-no-store';

export default async function ServiceDetails({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  let allServices = await getServices(null);
  let service = await getServices(id);

  const currentIndex = allServices.findIndex(
    (service: any) => service.documentId === id
  );

  const nextData =
    currentIndex !== -1 && currentIndex < allServices.length - 1
      ? {
          id: allServices[currentIndex + 1].documentId,
          title: allServices[currentIndex + 1].title,
        }
      : null;

  return (
    <main className="service-detail">
      <ServiceDetail 
        data={service} 
        nextData={nextData} 
      />
    </main>
  );
}
