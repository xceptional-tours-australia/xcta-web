import './style.css';

interface SectionTitleProps{
    title: string;
    position?: string;
}

const textPosition: { [char: string]: string } = {
    start: 'lg:text-left',
    center: 'lg:text-center',
    end: 'lg:text-right',
}

export default function SectionTitle({title, position = 'start'}: SectionTitleProps){
    return(
        <div className="section-title__container">
            <h3 className={`section-title__text text-center ${textPosition[position]}`}>{title}</h3>
        </div>
    );
}