import Image from 'next/image';
import './style.css';


interface ServiceCardProps {
    data: {
        id: number;
        icon: string;
        title: string;
    },
    index: number
}

const styleCardPerIndex = [
    'lg:col-start-2 lg:rounded-tl-[20px]',
    'lg:rounded-tr-[20px]' ,
    'lg:rounded-s-[20px]',
    '',
    'lg:rounded-ee-[20px]'
];


function CircleGradient()
{
    return (
        <div className="service-card__overlay-gradient">
            <div className="service-card__circle-1 service-card__overlay-circle-gradient"></div>
            <div className="service-card__circle-2 service-card__overlay-circle-gradient"></div>
            <div className="service-card__circle-3 service-card__overlay-circle-gradient"></div>
            <div className="service-card__circle-4 service-card__overlay-circle-gradient"></div>
        </div>
    )
}

export default function ServiceCard({data:{icon, title}, index}:ServiceCardProps)
{
    return (
        <div className={`service-card__wrapper ${styleCardPerIndex[index]}`}>
            <div className="service-card__content">
                {icon &&   <Image
                src={icon}
                alt={`${title} image`}
                className='service-card__icon'
                width={70}
                height={70}
                />}
                <h5 className="service-card__title">{title}</h5>
            </div>
            <CircleGradient/>
        </div>
      );
}