import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"

import "./style.css";
import Banner from "@/components/Banner/Banner";
import Link from "next/link";
import { sitemapLinks } from "@/lib/dummyData";

export default function page() {
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
                  {item.children.map((child, childIndex) => (
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
