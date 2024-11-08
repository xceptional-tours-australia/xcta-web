import './style.css';
import AdvatageCard from './AdvantageCard/AdvantageCard';
import { getAdvantages } from '@/lib/strapi';

export default async function Advantages()
{
    const advantages = await getAdvantages();

    return (
        <section className="section-wrapper">
            <div className="advantages">
                <div className="advantages__container" >
                    <span className="title">Advantages</span>

                    <div className='advantages__cards'>
                        {advantages.map((advantage: any, i : any) => (
                            <AdvatageCard 
                                data={advantage} 
                                orderLast={i % 2 != 0} 
                                key={advantage.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}