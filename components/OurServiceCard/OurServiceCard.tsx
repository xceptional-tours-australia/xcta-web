import Image from "next/image";
import "./style.css";
import { Button } from "../ui/button";
import Link from "next/link";

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
      <div className="our-service-card__circle-2 service-card__overlay-circle-gradient"></div>
      <div className="our-service-card__circle-3 our-service-card__overlay-circle-gradient"></div>
      <div className="our-service-card__circle-4 our-service-card__overlay-circle-gradient"></div>
    </div>
  );
}

export default function OurServiceCard({
  data: { icon, title, description },
}: OurServiceCardProps) {
  return (
    <div className={`our-service-card__wrapper rounded-lg`}>
      <div className="our-service-card__content">
        {icon && (
          <Image
            src={icon}
            alt={`${title} image`}
            className="our-service-card__icon"
            width={70}
            height={70}
          />
        )}
        <h5 className="our-service-card__title">{title}</h5>
        <div className="mt-[5rem]">
          <h5>{description}</h5>
        </div>

        <div className="w-full">
          <Link href={"/our-services/123"}>
            <Button
              variant={"link"}
              type="button"
              className="p-0 text-[1.4rem] text-c-variant-orange"
            >
              Read More
            </Button>
          </Link>
        </div>
      </div>
      <CircleGradient />
    </div>
  );
}
