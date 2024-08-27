"use client"
import { Button } from "@/components/ui/button"
import React, { useEffect } from "react"
import xctaLogoWhite from "../../../assets/logo/xcta-logo-white.svg"
import xctaLogo from "../../../assets/logo/xcta-logo.svg"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import "./style.css"

const menus = [
  {
    title: "Home",
    url: "/"    
  },
  {
    title: "Our Services",
    url: "/our-services"    
  },
  {
    title: "About Us",
    url: "/about-us"    
  }
]

export default function Navbar() {
  const pathname = usePathname()

  useEffect(() => {
    console.log(pathname)
  }, [pathname])

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Image 
          src={xctaLogoWhite}
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
        <Button>Get In Touch</Button>
      </div>
    </nav>
  )
}
