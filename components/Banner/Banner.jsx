"use client"
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import bannerSitemap from '../../assets/image/banner-sitemap.jpg'
import bannerOurServices from '../../assets/image/banner-our-services.jpg'
import bannerAboutUs from '../../assets/image/banner-about-us.jpg'
import bannerOurTeam from '../../assets/image/banner-our-team.jpg'
import './style.css';

export default function Banner() {
  const pathname = usePathname()
  const [imageURL, setImageURL] = useState(bannerSitemap);
  const [bannerFor, setBannerFor] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      const reqOptions = {
        cache: 'no-store',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      }

      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/services?populate=*`
    
      try {
        const request = await fetch(apiUrl, reqOptions)
        const response = await request.json()
        console.log(response)
      } catch (error) {
        return error
      }
    }

    getProducts()
  }, [])

  useEffect(() => {
    // console.log('data = ', data)
    switch (pathname) {
      case '/sitemap':
        setBannerFor('sitemap')
        setImageURL(bannerSitemap)
        break
      case '/our-services':
        setBannerFor('our-services')
        setImageURL(bannerOurServices)
        break
      case '/about-us':
        setBannerFor('about-us')
        setImageURL(bannerAboutUs)
        break
        case '/our-team':
          setBannerFor('our-team')
          break
      default:
        setBannerFor(false)
        setImageURL(bannerSitemap) 
    }
  }, [pathname])

  return (
    <section className={`banner${' ' + bannerFor}`}>
      {bannerFor === "our-team" ? (
        <div className="banner__gradient">
          <Image className="banner__image" src={bannerOurTeam} alt='banner' />
          <Image className="banner__image" src={bannerOurTeam} alt='banner' />
        </div>
      ) : (
        <Image className="banner__image" src={imageURL} alt='banner' />
      )}

      <div className="banner__texts">
        <div className="banner__wrapper">
          {/* Title */}
          {bannerFor === "sitemap" && (
            <h1 className="banner__title"><strong>Navigate Our <br />Website</strong> <em>Seamlessly</em></h1>
          )}
          {bannerFor === "about-us" && (
            <h1 className="banner__title"><strong>Welcome to <br />Xceptional Tours Australia</strong> <em>{"("}XCTA{")"}</em></h1>
          )}
          {bannerFor === "our-services" && (
            <h1 className="banner__title"><strong>Custom Australian <br />Tours Made</strong> <em>Simple</em></h1>
          )}
          {bannerFor === "our-team" && (
            <h1 className="banner__title"><strong>Meet the Experts <br />Behind Your Journey</strong></h1>
          )}

          {/* Subtitle */}
          {bannerFor === "sitemap" && (
            <p className="banner__subtitle">Access a full list of our website{"'"}s pages and resources. Our sitemap helps you find the information you need quickly and efficiently.</p>
          )}
          {bannerFor === "about-us" && (
            <p className="banner__subtitle">Founded in July 2022, Xceptional Tours Australia {"("}XCTA{")"} specializes in providing outstanding travel experiences across Australia. Our team of experienced travel professionals, each with over 18 years in the industry, brings deep expertise in creating unforgettable Australian vacations.</p>
          )}
          {bannerFor === "our-services" && (
            <p className="banner__subtitle">Explore Australia{"'"}s iconic destinations with tours designed just for you. Relax while we plan your ideal adventure.</p>
          )}
          {bannerFor === "our-team" && (
            <p className="banner__subtitle">Our passionate team of travel professionals is dedicated to crafting exceptional Australian adventures. With a deep love for Australia and years of experience, we ensure every detail of your trip is personalized to perfection.</p>
          )}
        </div>
      </div>
    </section>
  )
}
