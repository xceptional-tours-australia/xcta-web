import React from "react"
import "./style.css"
import { abouts } from "@/lib/dummyData"

export default function About() {
  return (
    <section className="about">
      <div className="section-wrapper">
        <div className="about__container">
          <div className="about__title">
            <h1><span>About</span> Xceptional 
            Tours Australia</h1>
          </div>

          <div className="about__boxs">
            {abouts.map((about, i) => (
              <div className="about__box" key={i}>
                <span>{ about.title }</span>
                <p>{about.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
