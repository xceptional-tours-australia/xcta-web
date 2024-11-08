import SectionTitle from "@/components/global/SectionTitle/SectionTitle";
import aboutUsImg from '@/assets/image/about-us.png';
import circleImg1 from '@/assets/image/circle-1.svg';
import circleImg2 from '@/assets/image/circle-2.svg';
import { Button } from "../ui/button";
import Image from "next/image"
import Link from "next/link";
import './style.css';
export default function AboutSection(){

    return (
        <section className="section-wrapper">
            {/* <SectionTitle title="About Us"/> */}

            <div className="about-us">
                <span className="title">About Us</span>

                <div className="about-section__container">
                    <div className="about-section__img-wrapper">
                        <Image 
                            src={aboutUsImg}
                            alt="about image"
                            className="about-section__img"
                            // width={580}
                        />
                        <Image src={circleImg1} alt="circle" className="circle-1" />
                        <Image src={circleImg2} alt="circle" className="circle-2" />
                    </div>

                    <div className="about-section__content">
                        <div className="about-us__texts">
                            <h4 className="about-section__title">Welcome to Xceptional Tours Australia (XCTA)</h4>
                            <p className="about-section__paragraph">Founded in July 2022, Xceptional Tours Australia (XCTA) specializes in creating extraordinary travel experiences across Australia. Our team, with over 18 years of industry experience, ensures every Australian holiday is unforgettable.</p>
                        </div>

                        <Link href="/about-us">
                            <Button size={"lg"} variant="outline" type="button">Read More</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

