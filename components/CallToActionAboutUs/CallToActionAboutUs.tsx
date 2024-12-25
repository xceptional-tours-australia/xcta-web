import React from 'react'
import { Button } from '../ui/button'
import "./style.css"
import GetInTouch from '../global/GetInTouch/GetInTouch'

function CallToActionAboutUs() {
  return (
    <section className="section-wrapper">
      <div className="cta-about-us">
        <span>Meet the Experts Behind Xceptional Tours Australia</span>

        {/* <Button variant="outlineWhite">Reach Us</Button> */}
        <GetInTouch title="Reach Us" outline={true} />
      </div>
    </section>
  )
}

export default CallToActionAboutUs