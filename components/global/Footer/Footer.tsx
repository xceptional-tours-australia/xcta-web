import React from "react"
import Link from "next/link"
import Image from "next/image"
import xctaLogoWhite from "../../../assets/logo/xcta-logo-white.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import "./style.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__address">
          <Image 
            src={xctaLogoWhite}
            alt="xcta logo white"
            height={45}
          />

          <p>316-322 Portrush Rd, Marryatville SA 5068, Australia</p>
        </div>

        <div className="footer__contact">
          <div className="footer__social-media">
            <Link href="#">
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </div>

          <div className="footer__directs">
            <div className="footer__direct">
              <span>Call Us</span>
              <Link href="#">+61 432 211 1234</Link>
            </div>
            <div className="footer__direct">
              <span>Email Us</span>
              <Link href="#">xceptionaltours@gmail.com</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__other">
        <span>© Xceptional Tours {new Date().getFullYear()}</span>

        <div className="footer__legal">
          <Link href="#">Terms & Conditions</Link>
          <Link href="#">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}
