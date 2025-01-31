import { Orbitron,Bungee_Outline } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import StairTransition from "@/components/StairTransition";
import PageTransition from "@/components/PageTransition";
import { ReactElement } from "react";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900",],
  variable: "--font-orbitron"
});


const bungee_Outline = Bungee_Outline ({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-Bungee_Outline"
});

export const metadata = {
  title: "Portfolio Makawan",
  description: "This is my portfolio website Makawan Saengngoen",
};

interface RootLayoutProp {
  children : ReactElement
}

export default function RootLayout({ children } : RootLayoutProp) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${bungee_Outline.variable}`}>
        
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
