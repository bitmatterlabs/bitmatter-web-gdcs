import React, { ReactNode, useState } from "react";
import Ticker from "framer-motion-ticker";
import de from "../images/sliderLogos/de.png";
import amer from "../images/sliderLogos/a.png";
import moi from "../images/sliderLogos/moi.png";
import rera from "../images/sliderLogos/rera.png";
import dm from "../images/sliderLogos/dm.png";
import th from "../images/sliderLogos/th.png";
import Image from "next/image";

const slides = [
  {
    slide: (
      <div className="w-[8rem] md:w-[10rem] lg:w-[16rem]">
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
      <div className="w-[4rem] md:w-[5rem] lg:w-[8rem]">
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
      <div className="w-[10rem] md:w-[14rem] lg:w-[20rem]">
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
      <div className="w-[12rem] md:w-[16rem] lg:w-[22rem]">
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
      <div className="w-[8rem] md:w-[12rem] lg:w-[18rem]">
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
      <div className="w-[7rem] md:w-[9rem] lg:w-[12rem]">
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

interface SliderItem {
  slide: ReactNode;
}

interface InfiniteSliderProps {
  slideList?: SliderItem[];
  pauseOnHover?: Boolean;
  className?: string;
}

export const BrandSlider = ({
  slideList = slides,
  pauseOnHover = true,
  className,
}: InfiniteSliderProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={`w-full overflow-hidden ${className || ""}`}>
      {pauseOnHover ? (
        <div className="{h-[3rem] [&_div]:mr-[1rem] md:[&_div]:mr-[1.7rem] md:h-[6rem] lg:h-[8rem] relative w-full overflow-hidden bg-transparent before:absolute before:left-0 before:top-0 before:z-[1] before:h-full before:w-[100px] before:bg-slider-fade-left before:content-[''] after:absolute after:right-0 after:top-0 after:z-[1] after:h-full after:w-[100px] after:-scale-x-100 after:bg-slider-fade-right after:content-[''] [&_div]:flex [&_div]:items-center [&_div]:justify-center [&_div]:h-full lg:[&_div]:mr-[3rem]">
          <Ticker
            duration={15}
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
            isPlaying={isPlaying}
          >
            {slideList.map((item, index) => (
              <div
                className="slide grayscale hover:grayscale-0 transition-grayscale duration-300"
                key={index}
              >
                {item.slide}
              </div>
            ))}
          </Ticker>
        </div>
      ) : (
        <div className="relative w-full overflow-hidden bg-transparent before:absolute before:left-0 before:top-0 before:z-[1] before:h-full before:w-[100px] before:bg-slider-fade-left before:content-[''] after:absolute after:right-0 after:top-0 after:z-[1] after:h-full after:w-[100px] after:-scale-x-100 after:bg-slider-fade-right after:content-['']">
          <div className="h-[3rem] [&>div]:mr-[1rem] md:[&>div]:mr-[1.7rem] md:h-[6rem] lg:h-[8rem] animate-infinite-slider-sm md:animate-infinite-slider-md lg:animate-infinite-slider flex sm:w-[110rem] md:w-[152.4rem] lg:w-[228rem] lg:[&>div]:mr-[3rem] [&_img]:select-none [&_img]:grayscale [&_img:hover]:grayscale-0 [&_img]:transition-grayscale [&_img]:duration-300 [&_div]:flex [&_div]:items-center [&_div]:justify-center [&_div]:h-full">
            {slideList.map((item, index) => (
              <div className="slide" key={index}>
                {item.slide}
              </div>
            ))}
            {slideList.map((item, index) => (
              <div className="slide" key={index + slideList.length}>
                {item.slide}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
