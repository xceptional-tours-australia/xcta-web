import Image from 'next/image';
import bannerSitemap from '../../assets/image/banner-sitemap.jpg'
import './style.css';

export default function Banner() {
  return (
    <section className="banner">
      <Image className="banner__image" src={bannerSitemap} alt='banner sitemap' />

      <div className="banner__texts">
        <div className="banner__wrapper">
          <h1 className="banner__title"><strong>Navigate Our 
          Website</strong> <em>Seamlessly</em></h1>
          <p className="banner__subtitle">Access a full list of our website’s pages and resources. Our sitemap helps you find the information you need quickly and efficiently.</p>
        </div>
      </div>
    </section>
  )
}
