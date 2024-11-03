import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import FormAction from "../FormAction/FormAction"

type GetInTouchProps = {
  title: string;
};

function GetInTouch({ title } : GetInTouchProps) {
  return (
    <div className="getintouch">
      <Sheet>
        <SheetTrigger asChild>
          <Button>{ title }</Button>
        </SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              Let&apos;s Talk
            </SheetTitle>
            <SheetDescription>
              <span className="text-lg">
                Get in Touch with Xceptional Tours Australia
              </span>
            </SheetDescription>
          </SheetHeader>

          <div className="mt-8">
            <FormAction></FormAction>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default GetInTouch