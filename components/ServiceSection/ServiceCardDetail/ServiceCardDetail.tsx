import { SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import './style.css';

interface ServiceDetailProps{
    title: string;
}


export default function ServiceCardDetail({title}:ServiceDetailProps){
    return (
        <SheetContent>
            <SheetHeader className='service-card-detail__header'>
                <SheetDescription className='service-card-detail__desc'>
                    Services
                </SheetDescription>
                <SheetTitle className='service-card-detail__title'>
                    {title}
                </SheetTitle>
            </SheetHeader>
            <div className='service-card-detail__content'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae distinctio accusamus eaque culpa ullam dolores hic, assumenda aperiam cum ea! Repellendus dicta ipsum ipsa tempora inventore temporibus est, blanditiis molestiae.</p>
            </div>
        </SheetContent>
    )
}