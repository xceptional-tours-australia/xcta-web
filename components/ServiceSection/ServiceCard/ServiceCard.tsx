import Image from "next/image";
import "./style.css";

interface ServiceCardProps {
  data: {
    // id: number;
    icon: string;
    title: string;
  };
  // index: number;
}

// const styleCardPerIndex = [
//   "lg:col-start-2 lg:rounded-tl-[20px]",
//   "lg:rounded-tr-[20px]",
//   "lg:rounded-s-[20px]",
//   "",
//   "lg:rounded-ee-[20px]",
// ];

function CircleGradient() {
  return (
    <div className="service-card__overlay-gradient">
      <div className="service-card__circle-1 service-card__overlay-circle-gradient"></div>
      <div className="service-card__circle-2 service-card__overlay-circle-gradient"></div>
      <div className="service-card__circle-3 service-card__overlay-circle-gradient"></div>
      <div className="service-card__circle-4 service-card__overlay-circle-gradient"></div>
    </div>
  );
}

// export default function ServiceCard({ data: { icon, title }, index,}: ServiceCardProps) {
export default function ServiceCard({ data = false } : any) {
  // console.log(JSON.stringify(data?.logo?.url, null, 2))
  return (
    // <div className={`service-card__wrapper ${styleCardPerIndex[index]}`}>
    <div className={`service-card__wrapper`}>
      <div className="service-card__content">
        {data?.logo?.url && (
          <Image
            src={data?.logo?.url}
            alt={`${data.title} image`}
            className="service-card__icon"
            width={70}
            height={70}
          />
        )}
        
        <h5 className="service-card__title">{data ? data.title : "View All Services"}</h5>
      </div>

      <CircleGradient />
    </div>
  );
}
