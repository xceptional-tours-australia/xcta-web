import React from "react";
import "./style.css";
import Link from "next/link";
import { Button } from "../ui/button";
import { MapIcon } from "lucide-react";

export default function OurServiceItem() {
  return (
    <section className="our-service-item">
      <div className="section-wrapper">
        <div className="our-service-item__title">
          <h1>Our Services</h1>
        </div>

        <div className="our-service-item__content">
          <div className="our-service-item__overlay-gradient">
            <div className="our-service-item__circle-1 our-service-item__overlay-circle-gradient"></div>
            <div className="our-service-item__circle-2 our-service-item__overlay-circle-gradient"></div>
            <div className="our-service-item__circle-3 our-service-item__overlay-circle-gradient"></div>
          </div>

          <div className="our-service-item__card-wrapper">
            <div className="our-service-item__card-highlight">
              <div>
                <MapIcon />
              </div>
              <h1>Bespoke tours</h1>
            </div>
            <div className="flex-[2]">
              <div className="h-full flex flex-col justify-between">
                <div className="text-[1.6rem]">
                  <p>
                    At Xceptional Tours Australia, we understand that every
                    traveller is unique. That`s why we offer Bespoke Tour
                    Packages designed to meet your specific interests,
                    preferences, and needs.
                  </p>
                  <p>
                    Our team of experienced destination experts works closely
                    with you to create a personalized itinerary that ensures you
                    experience the best your destination has to offer.
                  </p>
                </div>
                <div>
                  <Link href="/our-services/123">
                    <Button
                      variant="link"
                      type="button"
                      className="p-0 text-[1.4rem] text-c-variant-orange"
                    >
                      Read More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
