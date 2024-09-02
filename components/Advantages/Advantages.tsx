import './style.css';
import { advantages } from '@/lib/dummyData';
import AdvatageCard from './AdvantageCard/AdvantageCard';

export default function Advantages()
{
    return (
        <section className="section-wrapper py-32">
            <div className="advantages__container" >
                <div className='advantages__section-title'>
                    <h3 className='advantages__title'>Advantages</h3>
                </div>
                <div className='advantages__cards'>
                    {advantages.map((advantage, i) => <AdvatageCard data={advantage} orderLast={i % 2 != 0} key={i}/>)}
                </div>
            </div>
        </section>
    );
}