"use client";

import { HeroSubtitle, HeroTitle } from "./components/home/hero";
import { Container } from "./components/common/container";
import { GrowlyticOldIcon } from "./components/icons/growlyticOld";
import { ArrowRightCircleIcon } from "./components/icons/arrowRightCircle";
import { Poppins } from "next/font/google";
import { BrandSlider } from "./components/home/brandSlider";
import { Supergirl } from "./components/images/assets/supergirl";
import { LinkIcon } from "./components/icons/link";
import Link from "next/link";
import { ExpandingLink } from "./components/common/expandingLink";
import { ScrollToTop } from "./components/common/scrollToTop";
import {
  SectionSubtitle,
  SectionTitle,
} from "./components/common/sectionTitle";
import { ShieldCheckIcon } from "./components/icons/shieldCheck";
import { RocketLaunchIcon } from "./components/icons/rocketLaunch";
import { SparklesIcon } from "./components/icons/sparkles";
import { ChatBubbleBottomCenterTextIcon } from "./components/icons/chatBubbleBottomCenterText";

const poppinsHeroTitle = Poppins({
  subsets: ["latin"],
  weight: ["600"],
  style: "normal",
  preload: true,
});

const poppinsHeroSubtitle = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  style: "normal",
  preload: true,
});

const poppinsSectionTitle = Poppins({
  subsets: ["latin"],
  weight: ["500"],
  style: "normal",
  preload: true,
});

const poppinsSectionSubtitle = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  style: "normal",
  preload: true,
});

export default function Home() {
  return (
    <>
      <Container className="relative overflow-x-hidden bg-page-gradient">
        <div className="flex flex-col items-center justify-between min-h-[calc(100vh_-_var(--navigation-height))] px-10 md:px-20 lg:px-24">
          <div className="flex flex-col items-center justify-center flex-grow">
            <HeroTitle
              className={`py-5 [&_span]:text-transparent [&_span]:bg-clip-text pb-2 ${poppinsHeroTitle.className}`}
            >
              <span className="bg-hero-heading-v2 dark:bg-hero-heading-dark">
                Let&apos;s grow your <br /> business,{" "}
              </span>
              <span className="bg-hero-heading-blue">together</span>
            </HeroTitle>
            <HeroSubtitle
              className={`px-2 py-5 md:px-10 lg:px-20 text-[1rem] md:text-[1.1rem] lg:text-xl font-medium ${poppinsHeroSubtitle.className}`}
            >
              Empower Your Business with{" "}
              <Link href="#company" className="group/link">
                <span className="font-[600] group-hover/link:text-[#90A4AE]">
                  Growlytic Document Clearing Services
                </span>
                <span className="">
                  <LinkIcon
                    className="inline-block w-[1.9rem] h-[1.9rem] mb-[0.25rem] p-[0.2rem] group-hover/link:fill-[#90A4AE]"
                    strokeWidth={0.2}
                    color=""
                  />
                </span>
              </Link>
              . From setup to success, our experts transform dreams into
              businesses. Join us for seamless solutions in setup, approvals,
              and more, elevating your business to new heights!
            </HeroSubtitle>
          </div>
          <BrandSlider pauseOnHover={true} />
        </div>
        <Supergirl
          scale={0.2}
          className="absolute z-[2] scale-[1.1] md:scale-[1.2] lg:scale-[1.3] top-1/2 transform -translate-y-1/2 right-0 translate-x-[13rem] md:translate-x-[12rem] lg:translate-x-[10rem]"
        />
      </Container>
      <Container id="services" className="bg-page-gradient">
        <div className="flex flex-col items-center justify-start py-navigation-height">
          <SectionTitle
            className={`text-transparent bg-hero-heading-blue bg-clip-text ${poppinsSectionTitle.className}`}
          >
            {/* <ShieldCheckIcon className="inline-block w-6 h-6 mr-2" /> */}
            Unlocking Possibilities
          </SectionTitle>
          <SectionSubtitle
            className={`text-[1rem] md:text-[1.1rem] lg:text-xl font-medium`}
          >
            Explore a spectrum of services designed to
            shape your business destiny. From commercial and industrial
            licensing to tapping into Dubai&apos;s booming tourism industry, GDC
            Services equips you with the tools you need to thrive. Your success
            story starts here.
          </SectionSubtitle>
          <ExpandingLink
            textClassName="border border-2 border-background"
            href="#"
            size={"md"}
          >
            Hi
          </ExpandingLink>
          <div className="w-full md:w-[80vw] lg:w-[70vw]">
            <p>
              Company Setup: Title: &ldquo;Building Your Business Base&rdquo; Description:
              &ldquo;Ready to turn your ideas into a flourishing enterprise? GDC
              Services offers comprehensive solutions for company setup in
              Dubai. Our expertise spans across jurisdictions, ensuring a smooth
              journey as you establish your business presence.&rdquo;
            </p>{" "}
            <p>
              10 Year Visa: Title: &ldquo;Securing Your Future&rdquo; Description: &ldquo;Settle
              into the future with confidence through UAE&apos;s 10-Year Golden Visa.
              Join the league of visionary investors, and enjoy the freedom to
              thrive. GDC Services is your gateway to securing a long-term
              residency that aligns with your business ambitions.&rdquo;
            </p>
          </div>
        </div>
      </Container>
      <Container id="company" className="bg-hero-heading-blue relative overflow-x-hidden">
        <div className="flex flex-col items-center justify-start py-navigation-height text-white">
          <SectionTitle
            className={`${poppinsSectionTitle.className}`}
          >
            {/* <SparklesIcon className="inline-block w-6 h-6 mr-2" /> */}
            Our Story, Your Success
          </SectionTitle>
          <SectionSubtitle
            className={`text-[1rem] md:text-[1.1rem] lg:text-xl font-normal`}
          >
            GDC Services is your gateway to streamlined
            business setup in Dubai, UAE. Our journey since 2020 has been marked
            by enabling countless entrepreneurs to conquer challenges and seize
            opportunities. Join us to realize your business ambitions.
          </SectionSubtitle>
          <ExpandingLink
            textClassName="border border-2 border-background"
            href="#"
            size={"md"}
          >
            Hi
          </ExpandingLink>

          <p>
            Meet the Visionaries: Behind GDC&apos;s success story stands a dynamic
            team of experts and visionaries. Led by passionate leaders with deep
            market insights, we&apos;re dedicated to simplifying your business
            journey. Experience unmatched guidance and commitment.
          </p>
        </div>
      </Container>
      <Container id="contact" className="bg-page-gradient">
        <div className="flex flex-col items-center justify-start py-navigation-height">
          <SectionTitle
            className={`text-transparent bg-hero-heading-blue bg-clip-text ${poppinsSectionTitle.className}`}
          >
            {/* <ChatBubbleBottomCenterTextIcon className="inline-block w-6 h-6 mr-2" /> */}
            Get in touch
          </SectionTitle>
          <SectionSubtitle
            className={`text-[1rem] md:text-[1.1rem] lg:text-xl font-medium`}
          >
            Unlocking Possibilities: Explore a spectrum of services designed to
            shape your business destiny. From commercial and industrial
            licensing to tapping into Dubai&apos;s booming tourism industry, GDC
            Services equips you with the tools you need to thrive. Your success
            story starts here.
          </SectionSubtitle>
          <ExpandingLink
            textClassName="border border-2 border-background"
            href="#"
            size={"md"}
          >
            Hi
          </ExpandingLink>
          <p>
            Address: GDC #604, A-Block, Business Village, Near Diera Clock
            Tower, Dubai, UAE Tel: +971 4370 3904 Email:
            growlyticservices@gmail.com
          </p>
        </div>
      </Container>
      <ScrollToTop
        offSet={10}
        className="motion-safe:animate-bounce bottom-2 left-2"
      />
    </>
  );
}
