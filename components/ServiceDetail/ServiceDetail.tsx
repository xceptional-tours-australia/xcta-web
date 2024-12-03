"use client";
import React, { useEffect } from "react";
import { MapIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import "./style.css";
import Image from "next/image";
import aboutUsImg from "@/assets/image/about-us.png";
export const fetchCache = "force-no-store";
import parse from "html-react-parser";

export default function ServiceDetail({ data, nextData }: any) {
  return (
    <section className="section-wrapper pt-[15rem] pb-[10rem] min-desktop:pt-[21.4rem]">
      <div className="service-detail__content">
        <div className="service-detail__container">
          <div className="service-detail__content-header">
            <div className="service-detail__content-header_title">
              <div className="service-detail__content-header_icon">
                {/* <MapIcon /> */}
                <Image
                  src={data?.logo?.url}
                  alt="icon"
                  width={70}
                  height={70}
                />
              </div>

              <div className="service-detail__content-title">
                <h1>{data?.title}</h1>
              </div>
            </div>

            <div className="service-detail__backlink">
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
            {data?.image && (
              <Image
                src={data.image.url}
                alt="service detail image"
                className="service-detail-content__img"
                layout="fill"
              />
            )}
          </div>

          {/* <div
            dangerouslySetInnerHTML={{ __html: data?.description }}
            className="service-detail__content-desc"
          /> */}
          <div className="service-detail__content-desc">
            {parse(data?.description)}
          </div>
        </div>

        {nextData && (
          <div className="service-detail__footer">
            <Link href={`/our-services/${nextData.id}`}>
              <div className="service-detail__next">
                <span>NEXT</span>
                <span>{nextData.title}</span>
              </div>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
