import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import { StaticImageData } from "next/image";
import Image from "next/image"
import './style.css';

interface AdvantageDataProps {
    data: {
        img: StaticImageData;
        title: string;
        paragraph: string;
    },
    orderLast: boolean
}

export default function AdvatageCard({data:{img, title, paragraph}, orderLast = false}:AdvantageDataProps)
{
    return (
        <div className="advantage-card">
            <div className={`advantage-card__img-wrapper ${orderLast ? 'lg:order-last' : ''}`}>
                <Image
                src={img}
                alt={`${title} image`}
                className="advantage-card__img"
                />
            </div>
            <div className="advantage-card__content-wrapper">
                <h6 className="advantage-card__content-title">{title}</h6>
                <p className="advantage-card__content-paragraph">{paragraph}</p>
            </div>
        </div>
    )
}