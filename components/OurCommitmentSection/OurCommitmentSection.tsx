import Image from "next/image";
import React from "react";
import "./style.css";

import ourCommitmentMap from "../../assets/image/our-commitment-map.svg";

export default function OurCommitmentSection() {
  return (
    <section className="our-commitment-section__wrapper">
      <div className="section-wrapper py-[10rem]">
        <div className="our-commitment__content-wrapper">
          <div>
            <Image src={ourCommitmentMap} alt="our commitment map" />
          </div>
          <div className="flex flex-1 flex-col">
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
