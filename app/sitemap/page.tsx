import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"

import "./style.css";
import Banner from "@/components/Banner/Banner";
import Link from "next/link";
import { sitemapLinks as dummySitemapLinks } from "@/lib/dummyData";
import { getServices } from "@/lib/strapi";

export const metadata = {
  title: "Sitemap",
}

export default async function page() {
  let data = await getServices(null);

  const servicesChildren = data.map((dat : any) => ({
    title: dat.title,
    url: `/our-services/${dat.documentId}`,
  }));

  const sitemapLinks = dummySitemapLinks.map(link =>
    link.title === "Our Services"
      ? { ...link, children: servicesChildren }
      : link
  )
    
  return (
    <main className="sitemap">
      <Banner />

      <section className="section-wrapper">
        <div className="sitemap__lists">
          {sitemapLinks.map((item, index) => (
            <div key={index} className="sitemap__list--sub">
              <div className="sitemap__list">
                <FontAwesomeIcon icon={faCaretRight} />
                <Link href={item.url}>{item.title}</Link>
              </div>

              {item.children.length > 0 && (
                <div className="sitemap__lists">
                  {item.children.map((child : any, childIndex : any) => (
                    <div key={childIndex} className="sitemap__list">
                      <FontAwesomeIcon icon={faCaretRight} />
                      <Link href={child.url}>{child.title}</Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
