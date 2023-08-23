"use client";

import { HeroSubtitle, HeroTitle } from "./components/home/hero";
import { Container } from "./components/common/container";
import { GrowlyticOldIcon } from "./components/icons/growlyticOld";
import { ArrowRightCircleIcon } from "./components/icons/arrowRightCircle";
import { Poppins } from "next/font/google";
import { BrandSlider } from "./components/home/brandSlider";
import { Supergirl } from "./components/images/assets/supergirl";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
  style: "normal",
  preload: true,
});

export default function Home() {
  return (
    <Container className="relative overflow-x-hidden">
      <div className="flex flex-col items-center justify-between min-h-[calc(100vh_-_var(--navigation-height))] px-10 md:px-20 lg:px-24">
        <div className="flex flex-col flex-grow items-center justify-center">
          <HeroTitle
            className={`[&_span]:text-transparent [&_span]:bg-clip-text pb-2 ${poppins.className}`}
          >
            <span className="bg-hero-heading-v2 dark:bg-hero-heading-dark">
              Let&apos;s grow your <br /> business,{" "}
            </span>
            <span className="bg-hero-heading-blue">together</span>
          </HeroTitle>
          <HeroSubtitle className="my-5 px-2 md:px-10 lg:px-20 text-center">
            Growlytic Document Clearing Services lets you blah blah
          </HeroSubtitle>
        </div>
        <BrandSlider pauseOnHover={false} className="" />
        {/* <GrowlyticOldIcon scale={0.3} className="border border-blue-500" /> */}
      </div>
      <Supergirl scale={0.2} className="absolute z-[2] scale-[0.6] md:scale-[0.8] lg:scale-[1] top-0 right-0 translate-x-[8rem] md:translate-x-[7rem] lg:translate-x-10" />
    </Container>
  );
}
