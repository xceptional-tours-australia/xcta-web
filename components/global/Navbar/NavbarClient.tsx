"use client"

import React, { useEffect, useState } from "react"
import xctaLogoWhite from "../../../assets/logo/xcta-logo-white.svg"
import xctaLogo from "../../../assets/logo/xcta-logo.svg"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import "./style.css"
import { menus as  defaultMenus} from "@/lib/dummyData"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faX } from "@fortawesome/free-solid-svg-icons"
import GetInTouch from "../GetInTouch/GetInTouch"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

type NavbarClientProps = {
  data: {
    id: number;
    icon: string;
    title: string;
    description: string;
  }[];
};


export default function NavbarClient({ data } : any) {
  const pathname = usePathname()
  const [isScrolling, setIsScrolling] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const closeSheet = () => setIsSheetOpen(false);

  const menus = defaultMenus.map(menu => {
    if (menu.title === "Our Services") {
      return {
        ...menu,
        subMenus: data.map((item : any) => ({
          title: item.title,
          url: `/our-services/${item.documentId}`,
        }))
      }
    }
    return menu
  })

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

  const navbarClass = `navbar ${pathname === "/" ? "navbar--home" : "navbar--others"} ${isScrolled ? "navbar--scrolled" : ""} ${isScrolling ? "navbar--hidden" : ""}`;

  return (
    <div className={navbarClass}>
      <div className="navbar__container">
        <div className="navbar__logo">
          <Link href="/">
            <Image 
              src={pathname === "/" && !isScrolled ? xctaLogoWhite : xctaLogo}
              alt="xcta logo white"
              height={45}
            />
          </Link>
        </div>

        <div className="navbar__items">
          {menus.map((menu, i) => (
            <div className="navbar__wrapper" key={i}>
              <div 
                className={pathname === menu.url ? "navbar__item navbar__item--active" : "navbar__item"} 
              >
                <div className="navbar__item-dot" />
                <Link href={menu.url}>{ menu.title }</Link>
              </div>

              {menu.subMenus && (
                <div className="navbar__dropdown">
                  <div className="navbar__dropdown-wrapper">
                    {menu.subMenus.map((submenu:any, n:any) => (
                      <div 
                        className={pathname === submenu.url ? "navbar__dropdown-item navbar__dropdown-item--active" : "navbar__dropdown-item"} 
                        key={n}
                      >
                        <div className="navbar__dropdown-dot" />
                        <Link href={submenu.url}>{ submenu.title }</Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>


        <div className="navbar__action">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <div className="navbar__trigger" onClick={() => setIsSheetOpen(!isSheetOpen)}>
                <div className="navbar__burger" >
                  <FontAwesomeIcon icon={faBars} />
                </div>
              </div>
            </SheetTrigger>

            <SheetContent className="navbar__content">
              <div className="navbar__menus">
                <Accordion type="single" collapsible className="w-full">
                  {menus.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index + 1}`}>
                      {item.subMenus && item.subMenus.length > 0 ? (
                        <>
                          <AccordionTrigger>
                            <Link href={item.url} onClick={closeSheet}>{item.title}</Link>
                          </AccordionTrigger>
                          
                          <AccordionContent className="navbar__submenu">
                            {item.subMenus.map((subItem:any, subIndex:any) => (
                              <Link key={subIndex} href={subItem.url} onClick={closeSheet}>
                                {subItem.title}
                              </Link>
                            ))}
                          </AccordionContent>
                        </>
                      ) : (
                        <div className="navbar__solo-menu">
                          <Link href={item.url} onClick={closeSheet} className="text-gray-500 cursor-default">
                            {item.title}
                          </Link>
                        </div>
                      )}
                    </AccordionItem>
                  ))}
                </Accordion>
              </div> 
            </SheetContent>
          </Sheet>
        </div>

        <GetInTouch title="Get In Touch" outline={false} />
      </div>
    </div>
  )
}
