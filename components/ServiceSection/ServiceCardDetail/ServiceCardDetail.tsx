import { SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import './style.css';

export default function ServiceCardDetail({data }:any){
    return (
        <SheetContent className='service-card-detail__container' side="getInTouch">
            <SheetHeader className='service-card-detail__header'>
                <span>Services</span>
                <span>{data?.title}</span>
            </SheetHeader>

            {data?.description && (
                <div dangerouslySetInnerHTML={{ __html: data?.description }} className='service-card-detail__description' />
            )}
        </SheetContent>
    )
}