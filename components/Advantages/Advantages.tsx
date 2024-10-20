import './style.css';
import AdvatageCard from './AdvantageCard/AdvantageCard';
import { getAdvantages } from '@/lib/strapi';

export default async function Advantages()
{
    const advantages = await getAdvantages();

    return (
        <section className="section-wrapper py-20 lg:py-32">
            <div className="advantages__container" >
                <div className='advantages__section-title'>
                    <h3 className='advantages__title'>Advantages</h3>
                </div>
                <div className='advantages__cards'>
                    {advantages.map((advantage, i) => <AdvatageCard data={advantage} orderLast={i % 2 != 0} key={advantage.id}/>)}
                </div>
            </div>
        </section>
    );
}