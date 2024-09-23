import React from "react";
import "./style.css";
import Link from "next/link";
import { Button } from "../ui/button";

export default function OurServiceItem() {
  return (
    <section className="our-service-item">
      <div className="section-wrapper">
        <div className="our-service-item__title">
          <h1>Our Services</h1>
        </div>

        <div className="our-service-item__content">
          <div>
            <div className="our-service-item__semicircle">
              <div>
                <span></span>
              </div>
            </div>
          </div>

          <div className="px-10 py-9 flex absolute top-0 bottom-0 z-10">
            <div className="border flex-1 flex flex-col justify-center items-center">
              <div>icon</div>
              <p>Bespoke tours</p>
            </div>
            <div className="border flex-1">
              <div className="border h-full flex flex-col justify-between">
                <div className="text-base">
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
                  <Link href="/about-us">
                    <Button
                      variant="link"
                      type="button"
                      className="p-0 text-sm text-c-variant-orange"
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
