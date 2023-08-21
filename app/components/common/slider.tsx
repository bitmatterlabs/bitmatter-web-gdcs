import React, { ReactNode, useState } from "react";
import Ticker from "framer-motion-ticker";

interface SliderItem {
  slide: ReactNode;
}

interface InfiniteSliderProps {
  slideList: SliderItem[];
  pauseOnHover?: Boolean;
  classNames?: string;
}

export const InfiniteSlider = ({
  slideList,
  pauseOnHover = false,
  classNames,
}: InfiniteSliderProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return pauseOnHover ? (
    <div
      className={`relative w-full overflow-hidden bg-transparent before:absolute before:left-0 before:top-0 before:z-[1] before:h-full before:w-[100px] before:bg-slider-fade-left before:content-[''] after:absolute after:right-0 after:top-0 after:z-[1] after:h-full after:w-[100px] after:-scale-x-100 after:bg-slider-fade-right after:content-[''] [&_div]:flex [&_div]:items-center [&_div]:justify-center [&_div]:h-full [&_div]:mr-[3rem] ${
        classNames || ""
      }`}
    >
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
      <div className="h-[8rem] animate-infinite-slider flex w-[228rem] [&>div]:mr-[3rem] [&_img]:select-none [&_img]:grayscale [&_img:hover]:grayscale-0 [&_img]:transition-grayscale [&_img]:duration-300 [&_div]:flex [&_div]:items-center [&_div]:justify-center [&_div]:h-full">
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
  );
};
