import React from 'react'
import { Button } from '../ui/button'
import "./style.css"

function CallToActionAboutUs() {
  return (
    <section className="section-wrapper">
      <div className="cta-about-us">
        <span>Meet the Experts Behind Xceptional Tours Australia</span>

        <Button variant="outlineWhite">Reach Us</Button>
      </div>
    </section>
  )
}

export default CallToActionAboutUs