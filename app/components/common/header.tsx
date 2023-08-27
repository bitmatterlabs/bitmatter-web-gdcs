"use client";

import Link from "next/link";
import { Container } from "./container";
import { Button } from "./button";
import { HambergerIcon } from "../icons/hamberger";
import { useState } from "react";
import { GrowlyticOldIcon } from "../icons/growlyticOld";

export const Header = () => {
  const [hambergerMenuIsOpen, setHambergerMenuIsOpen] = useState(false);

  return (
    <header className="z-[3] fixed top-0 left-0 w-full border-b border-black-a08 backdrop-blur-[13px] bg-white/25 font-medium">
      <Container className="flex items-center h-navigation-height">
        <Link
          href="/"
          onClick={() => setHambergerMenuIsOpen(false)}
          className="focus:outline-none"
        >
          <GrowlyticOldIcon scale={0.06} />
        </Link>

        <div
          className={
            "transition-visibility lg:block delay-0" +
            (hambergerMenuIsOpen ? "block" : "hidden delay-150")
          }
        >
          <nav
            className={
              "fixed lg:relative lg:top-0 lg:h-auto lg:w-auto lg:bg-transparent top-navigation-height left-0 w-full overflow-auto lg:overflow-hidden bg-background lg:opacity-100 lg:transition-none transition-[opacity, transform, colors] duration-300 ease-in-out " +
              (hambergerMenuIsOpen
                ? "opacity-100 h-[calc(100vh_-_var(--navigation-height))]"
                : "opacity-0 h-0")
            }
          >
            <ul
              className={
                "ease-in flex flex-col lg:[&_a:focus]:bg-[#e1e8eb] [&_a:focus]:outline-none lg:flex-row lg:items-center h-full [&_a]:w-full [&_a]:flex [&_a]:items-center [&_a]:text-md lg:[&_a]:text-md [&_a]:truncate [&_a]:whitespace-nowrap [&_a:hover]:text-gray-500 [&_a]:font-medium [&_a]:h-navigation-height lg:[&_a]:h-fit lg:[&_a]:p-1 lg:[&_a]:rounded-lg lg:[&_a:hover]:bg-[#e1e8eb] [&_li]:mx-8 lg:[&_li]:ml-3 lg:[&_li]:mr-0 [&_li]:border-b [&_li]:border-black-a08 lg:[&_li]:border-none lg:[&_a]:translate-y-0 lg:[&_a]:transition-colors [&_a]:-translate-y-6 [&_a]:transition-[colors,transform] duration-500 " +
                (hambergerMenuIsOpen && "[&_a]:-translate-y-[0]")
              }
            >
              <li>
                <Link
                  href="/services"
                  onClick={() => setHambergerMenuIsOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  onClick={() => setHambergerMenuIsOpen(false)}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={() => setHambergerMenuIsOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={() => setHambergerMenuIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center h-full ml-auto">
          <Button href="/contact" variant="primary" size="md">
            Talk to an Expert
          </Button>

          <button
            className="ml-4 lg:hidden"
            onClick={() => setHambergerMenuIsOpen((open) => !open)}
          >
            <span className="sr-only">Toggle menu</span>
            <HambergerIcon />
          </button>
        </div>
      </Container>
    </header>
  );
};
