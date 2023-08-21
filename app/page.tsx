"use client";

import Image from "next/image";
import { HeroSubtitle, HeroTitle } from "./components/home/hero";
import { Container } from "./components/common/container";
import { InfiniteSlider } from "./components/common/slider";
import de from "./components/images/sliderLogos/de.png";
import amer from "./components/images/sliderLogos/a.png";
import moi from "./components/images/sliderLogos/moi.png";
import rera from "./components/images/sliderLogos/rera.png";
import dm from "./components/images/sliderLogos/dm.png";
import th from "./components/images/sliderLogos/th.png";
import { GrowlyticOldIcon } from "./components/icons/growlyticOld";
import { ArrowRightCircleIcon } from "./components/icons/arrowRightCircle";

const slides = [
  {
    slide: (
      <div className="w-[16rem]">
        <Image
          src={de}
          alt="Amer Logo"
          className="object-contain"
          priority
          draggable={false}
        />
      </div>
    ),
  },
  {
    slide: (
      <div className="w-[8rem]">
        <Image
          src={amer}
          alt="Amer Logo"
          className="object-contain"
          priority
          draggable={false}
        />
      </div>
    ),
  },
  {
    slide: (
      <div className="w-[20rem]">
        <Image
          src={moi}
          alt="Ministry of Interior Logo"
          className="object-contain h-full"
          priority
          draggable={false}
        />
      </div>
    ),
  },
  {
    slide: (
      <div className="w-[22rem]">
        <Image
          src={rera}
          alt="Rera Logo"
          className="object-contain h-full"
          priority
          draggable={false}
        />
      </div>
    ),
  },
  {
    slide: (
      <div className="w-[18rem]">
        <Image
          src={dm}
          alt="Dubai Municipality Logo"
          className="object-contain h-full"
          priority
          draggable={false}
        />
      </div>
    ),
  },
  {
    slide: (
      <div className="w-[12rem]">
        <Image
          src={th}
          alt="Tas-Heel Logo"
          className="object-contain h-full"
          priority
          draggable={false}
        />
      </div>
    ),
  },
];

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-between min-h-[calc(100vh_-_var(--navigation-height))] p-10 md:p-20 lg:p-24">
        <GrowlyticOldIcon />
        <HeroTitle className="text-transparent bg-clip-text bg-hero-heading-v2 dark:bg-hero-heading-dark pb-2">
          Let&apos;s grow your <br /> business together
        </HeroTitle>
        <InfiniteSlider slideList={slides} pauseOnHover classNames="" />
      </div>
    </Container>
  );
}
