import SectionTitle from "../global/SectionTitle/SectionTitle";
import ServiceCard from "./ServiceCard/ServiceCard";
import { services as serviceData} from "@/lib/dummyData";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import './style.css';


export default function ServiceSection()
{
    const services = serviceData.slice(0,4);
    services.push({icon:'', title:'View All Services'});

   return  (
    <section className="section-wrapper pb-24">
        <SectionTitle title="Our Services" position="end"/>
        <div className="service-section__container">
            {services.map((data,i) => (i != services.length - 1) ? 
                <Sheet key={i}>
                    <SheetTrigger asChild>
                        <ServiceCard  data={data} index={i}/>
                    </SheetTrigger> 
                </Sheet> : 
                <Link href="our-services" key={i}>
                    <ServiceCard data={data} index={i}/>
                </Link>
            )}
        </div>
    </section>
   )
}