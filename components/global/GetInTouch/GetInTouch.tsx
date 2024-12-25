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
  outline: boolean
};

function GetInTouch({ title, outline = false } : GetInTouchProps) {
  return (
    <div className="getintouch">
      <Sheet>
        <SheetTrigger className="sheet-trigger" asChild>
          <Button size="lg" variant={outline ? "outlineWhite" : "default"}>{ title }</Button>
        </SheetTrigger>

        <SheetContent side={"getInTouch"} className="pt-[10rem]">
          <SheetHeader>
            <SheetTitle className="text-[2.2rem] text-left">
              Let&apos;s Talk
            </SheetTitle>
            <SheetDescription>
              <span className="text-[1.6rem] leading-[2.4rem] text-left inline-block">
                Get in Touch with Xceptional Tours Australia
              </span>
            </SheetDescription>
          </SheetHeader>

          <div className="mt-[4rem]">
            <FormAction></FormAction>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default GetInTouch