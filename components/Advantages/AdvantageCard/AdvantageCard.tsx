import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import { StaticImageData } from "next/image";
import Image from "next/image"
import './style.css';

export default function AdvatageCard({data, orderLast = false} : any)
{
    return (
        <div className="advantage-card">
            <div className={`advantage-card__img-wrapper ${orderLast ? 'lg:order-last advantage-card__img-wrapper--even' : ''}`}>
                <Image
                    src={data.image.url}
                    alt={`${data.title} image`}
                    className="advantage-card__img"
                    width={500}
                    height={500}
                    quality={100}
                />
            </div>

            <div className="advantage-card__content-wrapper">
                <h6 className="advantage-card__content-title">{data.title}</h6>
                <p className="advantage-card__content-paragraph">{data.description}</p>
            </div>
        </div>
    )
}