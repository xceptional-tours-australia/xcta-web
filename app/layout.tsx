import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/global/Navbar/Navbar";
import Footer from "@/components/global/Footer/Footer";
import "./globals.css";
import CallToAction from "@/components/CallToAction/CallToAction";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  metadataBase: process.env.NEXT_PUBLIC_DOMAIN_URL,
  title: {
    template: "%s | XCTA Exceptional Tours Australia",
    default:
      "XCTA Exceptional Tours Australia", 
  },
  alternates: {
    canonical: '/',
  },
  description: "XCTA Exceptional Tours Australia specializes in creating extraordinary travel experiences across Australia",
  keywords: [
    "Exceptional Tours Australia",
    "XCTA travel",
    "Australia travel experts",
    "extraordinary travel experiences Australia",
    "personalized tours Australia",
    "custom travel Australia",
    "luxury tours Australia",
    "Australian adventure tours",
    "unique itineraries Australia",
    "outback tours",
    "Australian wildlife tours",
    "coastal tours Australia",
    "Great Barrier Reef tours",
    "Sydney Opera House tours",
    "Melbourne cultural tours",
    "Adelaide wine tours",
    "Australian travel planning",
    "tailored travel Australia",
    "Australian holiday packages",
    "unforgettable Australian adventures"
  ],
  openGraph: {
    title: "XCTA Exceptional Tours Australia",
    description: "XCTA specializes in creating extraordinary travel experiences across Australia",
    url: process.env.NEXT_PUBLIC_DOMAIN_URL,
    siteName: "XCTA Exceptional Tours Australia",
    images: [
      {
        url: "/xcta-og.jpg",
        width: 600,
        height: 600,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XCTA Exceptional Tours Australia",
    description: "XCTA specializes in creating extraordinary travel experiences across Australia",
    images: ["/xcta-og.jpg"],
  },
};

export const fetchCache = 'force-no-store';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
        <CallToAction />
        <Footer />
      </body>
    </html>
  );
}
