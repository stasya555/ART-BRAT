import localFont from "next/font/local";
import "./globals.css";
import { Inter } from 'next/font/google'
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "BRAT&ART",
  description: "magazine",
};

export default function RootLayou({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="icon"
          href="/my-app/public/logos/FyrreMagazineFavicon.svg"
          type="image/x-icon"
        />
      </head>
      <body>
        <Header />
            {children}
        <Footer />
      </body>
    </html>
  );
}
