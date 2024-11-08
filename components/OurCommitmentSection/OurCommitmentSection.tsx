import Image from "next/image";
import React from "react";
import "./style.css";

import ourCommitmentMap from "../../assets/image/our-commitment-map.svg";

export default function OurCommitmentSection() {
  return (
    <section className="our-commitment-section">
      <div className="section-wrapper">
        <div className="our-commitment__content-wrapper">
          <div className="our-commitment-section__image">
            <Image src={ourCommitmentMap} alt="our commitment map" />
          </div>

          <div className="our-commitment-section__info">
            <h3 className="our-commitment__content-title">
              Our Commitment to Service
            </h3>

            <h4 className="our-commitment__content-desc">
              Our team, strategically located in key markets including
              Australia, Indonesia, Malaysia, and Singapore, enables us to
              provide prompt and efficient service to our clients.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
