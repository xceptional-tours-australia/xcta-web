"use client"

import { Button } from "@/components/ui/button"
import React, { useEffect, useState } from "react"
import xctaLogoWhite from "../../../assets/logo/xcta-logo-white.svg"
import xctaLogo from "../../../assets/logo/xcta-logo.svg"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import "./style.css"
import { menus } from "@/lib/dummyData"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import FormAction from "../FormAction/FormAction"



export default function Navbar() {
  const pathname = usePathname()
  const [isScrolling, setIsScrolling] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let scrollTimeout: string | number | NodeJS.Timeout | undefined;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setIsScrolled(currentScrollPos > 0);
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false)
      }, 500)
    };

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeout);
    };
  }, []);

  const navbarClass = `
    navbar 
    ${pathname === "/" ? "navbar--home" : ""} 
    ${isScrolled ? "navbar--scrolled" : ""} 
    ${isScrolling ? "navbar--hidden" : ""}
  `;

  return (
    <div className={navbarClass}>
      <div className="navbar__container">
        <div className="navbar__logo">
          <Image 
            src={pathname === "/" && !isScrolled ? xctaLogoWhite : xctaLogo}
            alt="xcta logo white"
            height={45}
          />
        </div>

        <div className="navbar__items">
          {menus.map((menu, i) => (
            <div 
              className={pathname === menu.url ? "navbar__item navbar__item--active" : "navbar__item"} 
              key={i}
            >
              <div className="navbar__item-dot" />
              <Link href={menu.url}>{ menu.title }</Link>
            </div>
          ))}
        </div>

        <div className="navbar__action">
            <Sheet>
                <SheetTrigger asChild>
                    <Button>Get In Touch</Button>
                </SheetTrigger>    
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>
                            Let's Talk
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
      </div>
    </div>
  )
}
