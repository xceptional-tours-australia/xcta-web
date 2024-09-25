import React from "react";
import { MapIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import "./style.css";
import Image from "next/image";
import aboutUsImg from "@/assets/image/about-us.png";

export default function ServiceDetail() {
  return (
    <section className="service-detail__content">
      <div className="section-wrapper">
        <div className="service-detail__content-header">
          <div className="service-detail__content-header_title">
            <div className="service-detail__content-header_icon">
              <MapIcon />
            </div>

            <div className="service-detail__content-title">
              <h1>Bespoke Tours</h1>
            </div>
          </div>

          <div>
            <Link href="/our-services">
              <Button
                variant="link"
                type="button"
                className="service-detail__content-navigation"
              >
                Back to Our Services
              </Button>
            </Link>
          </div>
        </div>

        <div className="service-detail__content-img-wrapper">
          <Image
            src={aboutUsImg}
            alt="service detail image"
            className="service-detail-content__img"
          />
        </div>

        <div className="service-detail__content-desc">
          <h1>Xceptional Tours Australia</h1>
          <p>
            At Xceptional Tours Australia, we understand that every traveller is
            unique. That`s why we offer Bespoke Tour Packages designed to meet
            your specific interests, preferences, and needs.
          </p>
          <p>
            Our team of experienced destination experts works closely with you
            to create a personalized itinerary that ensures you experience the
            best your destination has to offer.
          </p>

          <h2>Key Services:</h2>
          <ul>
            <li>
              <strong>Personal Consultation:</strong> We begin with a detailed
              consultation to understand your travel preferences, interests, and
              budget.
            </li>
            <li>
              <strong>Unique Itineraries:</strong> Based on your inputs, we
              craft unique itineraries that include a mix of popular attractions
              and hidden gems.
            </li>
            <li>
              <strong>Flexible Plans:</strong> We offer flexibility in your
              schedule, allowing for spontaneous adventures and changes in your
              plans.
            </li>
            <li>
              <strong>Special Requests:</strong> Whether you need special
              accommodations, dietary requirements, or have specific requests
              like photography or bird watching, we tailor the experience to
              match.
            </li>
          </ul>

          <p>
            From adventure tours and cultural experiences to luxury escapes and
            family vacations, we ensure every detail is perfect, so you can
            travel with confidence and ease.
          </p>
        </div>
      </div>
    </section>
  );
}
