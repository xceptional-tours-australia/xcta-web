"use client"
import Image from "next/image";
import "./style.css";
import { Button } from "../ui/button";
import Link from "next/link";
import { useEffect } from "react";

interface OurServiceCardProps {
  data: {
    id: number;
    icon: string;
    title: string;
    description: string;
  };
}

function CircleGradient() {
  return (
    <div className="our-service-card__overlay-gradient">
      <div className="our-service-card__circle-1 our-service-card__overlay-circle-gradient"></div>
      <div className="our-service-card__circle-2 our-service-card__overlay-circle-gradient"></div>
      <div className="our-service-card__circle-3 our-service-card__overlay-circle-gradient"></div>
      <div className="our-service-card__circle-4 our-service-card__overlay-circle-gradient"></div>
    </div>
  );
}

export default function OurServiceCard({data}: any) {

  useEffect(() => {
  // console.log("icon = ", other)
}, [])

  return (
    <Link href={`/our-services/${data.id}`} className="our-service-card">
      <div className="our-service-card__wrapper">
        <div className="our-service-card__content">
          <div className="our-service-card__head">
            {data?.logo?.url && (
              <Image
                src={data.logo?.url}
                alt={`${data.title} image`}
                className="our-service-card__icon"
                width={70}
                height={70}
              />
            )}
            
            <h5 className="our-service-card__title">{data.title}</h5>
          </div>
          
          <div className="our-service-card__body">
            {/* <h5>{description}</h5> */}
            <div dangerouslySetInnerHTML={{ __html: data.description }} />
            
            <span className="our-service-car__rm">Read More</span>
            {/* <Link href={"/our-services/123"}>
              Read More
            </Link> */}
          </div>
        </div>

        <CircleGradient />
      </div>
    </Link>
  );
}
