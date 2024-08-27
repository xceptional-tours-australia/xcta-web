import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/global/Navbar/Navbar";
import Footer from "@/components/global/Footer/Footer";
import "./globals.css";
import CallToAction from "@/components/CallToAction/CallToAction";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exceptional Tours Australia",
  description: "Specializes in creating extraordinary travel experiences across Australia",
};

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
