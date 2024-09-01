import SectionTitle from "@/components/global/SectionTitle/SectionTitle";
import aboutUsImg from '@/assets/image/about-us.png';
import { Button } from "../ui/button";
import Image from "next/image"
import Link from "next/link";
import './style.css';
export default function AboutSection(){

    return (
        <section className="section-wrapper py-32">
            <SectionTitle title="About Us"/>
            <div className="about-section__container">
                <div className="about-section__img-wrapper">
                    <Image 
                        src={aboutUsImg}
                        alt="about image"
                        className="about-section__img"
                        width={580}
                    />
                </div>
                <div className="about-section__content">
                    <h4 className="about-section__title">Welcome to Xceptional Tours Australia (XCTA)</h4>
                    <p className="about-section__paragraph">Founded in July 2022, Xceptional Tours Australia (XCTA) specializes in creating extraordinary travel experiences across Australia. Our team, with over 18 years of industry experience, ensures every Australian holiday is unforgettable.</p>
                    <Link href="/about-us">
                        <Button variant="outline" type="button">Read More</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

