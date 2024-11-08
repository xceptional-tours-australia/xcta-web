import React from "react"
import heroImage from "../../assets/image/opera-house.jpg"
import Image from "next/image"
import "./style.css"

export default function Hero() {
  return (
    <section className="hero">
      <Image className="hero__image" src={heroImage} alt="hero image" />

      <div className="hero__main">
        <div className="hero__line" />

        <div className="hero__texts">
          <h1 className="hero__title">
            <strong>Your Gateway to <br /> Extraordinary <br /> </strong><em>Australian</em> <strong>Journeys</strong>
          </h1>

          <p className="hero__text">Personalized Tours for the Adventurous Spirit</p>
        </div>

        <div className="hero__line" />

        <div className="hero__scroll">
          <div>
            <span>
              <p>Scroll Down</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
