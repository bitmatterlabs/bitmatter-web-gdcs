"use client";

import { useState, useEffect } from "react";
import { ArrowUpRightIcon } from "../icons/arrowUpRight";
import Link from "next/link";

export const ScrollToTop = ({ className, offSet = 0 }: { className?: string, offSet?: number }) => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > offSet) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offSet]);

  return (
    <Link
      href="#hero"
      className={`md:items-center md:justify-center overflow-hidden fixed rounded-[0.375rem] w-fit h-fit bg-background hidden ${
        showScrollToTop ? "md:flex" : ""
      } ${className || "bottom-2 right-2"}`}
    >
      <ArrowUpRightIcon className="inline-block w-5 h-5 lg:w-10 lg:h-10" color="#fff" />
    </Link>
  );
};
