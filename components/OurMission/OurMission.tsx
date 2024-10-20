import React from 'react'
import SectionTitle from '../global/SectionTitle/SectionTitle'
import Image from 'next/image'
import OurMissionImage from "../../assets/image/our-mission.jpg"
import CircleStar from "../../assets/logo/circle-star.svg"

import "./style.css"

function OurMission() {
  return (
    <section className="mission section-wrapper">
      <SectionTitle title="Our Mission"/>
      
      <div className="mission__body">
        <div className="mission__image">
          <Image src={OurMissionImage} alt="our mission image" />
          <Image src={CircleStar} alt="circle star" />
        </div>

        <div className="mission__information">
          <span className="mission__title">Driven by Passion for Unforgettable Travel</span>

          <div className="mission__texts">
            <p>At Xceptional Tours Australia, our mission is to provide exceptional, bespoke travel experiences that showcase the unique charm and beauty of Australia.</p><br />
            <p>We are committed to delivering top-notch services that exceed our client{`'`}s expectations, ensuring every journey is memorable and seamless.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurMission