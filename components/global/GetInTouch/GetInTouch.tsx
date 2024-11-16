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
import "./style.css"

type GetInTouchProps = {
  title: string;
};

function GetInTouch({ title } : GetInTouchProps) {
  return (
    <div className="getintouch">
      <Sheet>
        <SheetTrigger className="sheet-trigger" asChild>
          <Button size="lg">{ title }</Button>
        </SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-3xl">
              Let&apos;s Talk
            </SheetTitle>
            <SheetDescription>
              <span className="text-xl">
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