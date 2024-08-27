import React from "react"
import "./style.css"
import { Button } from "../ui/button"

export default function CallToAction() {
  return (
    <section className="cta">
      <div className="cta__decorative"></div>

      <div className="cta__content">
        <div className="cta__texts">
          <span className="cta__title">Contact Us</span>
          <p className="cta__text">Thank you for your interest in Xceptional Tours Australia. For questions, booking assistance, or custom itineraries, our team is here to help. Please use the contact form below to reach us.</p>
        </div>

        <Button size="lg">Get In Touch</Button>
      </div>
    </section>
  )
}
