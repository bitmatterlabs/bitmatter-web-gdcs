"use client";

import { HeroSubtitle, HeroTitle } from "./components/home/hero";
import { Container } from "./components/common/container";
import { GrowlyticOldIcon } from "./components/icons/growlyticOld";
import { ArrowRightCircleIcon } from "./components/icons/arrowRightCircle";
import { Poppins } from "next/font/google";
import { BrandSlider } from "./components/home/brandSlider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
  style: "normal",
  preload: true,
});

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-between min-h-[calc(100vh_-_var(--navigation-height))] px-10 md:px-20 lg:px-24">
        <div className="flex flex-grow items-center">
          <HeroTitle
            className={`[&_span]:text-transparent [&_span]:bg-clip-text pb-2 ${poppins.className}`}
          >
            <span className="bg-hero-heading-v2 dark:bg-hero-heading-dark">
              Let&apos;s grow your <br /> business,{" "}
            </span>
            <span className="bg-hero-heading-blue">together</span>
          </HeroTitle>
        </div>
        <BrandSlider pauseOnHover={false} className="" />
        {/* <GrowlyticOldIcon scale={0.3} className="border border-blue-500" /> */}
      </div>
    </Container>
  );
}
