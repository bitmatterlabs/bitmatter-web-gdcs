"use client";

import { HeroSubtitle, HeroTitle } from "./components/home/hero";
import { Container } from "./components/common/container";
import { Poppins } from "next/font/google";
import { BrandSlider } from "./components/home/brandSlider";
import { Supergirl } from "./components/images/assets/supergirl";
import { LinkIcon } from "./components/icons/link";
import Link from "next/link";
import { ExpandingLink } from "./components/common/expandingLink";
import { ScrollToTop } from "./components/common/scrollToTop";
import {
  SectionBody,
  SectionSubtitle,
  SectionTitle,
} from "./components/common/sectionTitle";
import { CallingGirl } from "./components/images/assets/callingGirl";
import { ContactSection } from "./components/home/contactDetails";
import { CompanyStatsSection } from "./components/home/companyStats";
import { OnlineBubble } from "./components/common/onlineBubble";
import {
  CompanySetupTiles,
  LicensingTiles,
  VatTaxTiles,
  VisaTiles,
} from "./components/home/servicesTiles";
import { PageTitle } from "./components/common/pageTitle";

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
  weight: ["700"],
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
              <Link href="#company" className="group/link focus:outline-none">
                <span className="font-[600] group-hover/link:text-[#90A4AE] group-focus/link:text-[#90A4AE]">
                  Growlytic Document Clearing Services
                </span>
                <span className="">
                  <LinkIcon
                    className="inline-block w-[1.9rem] h-[1.9rem] mb-[0.25rem] p-[0.2rem] group-hover/link:fill-[#90A4AE] group-focus/link:fill-[#90A4AE]"
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
      <Container className="bg-page-gradient-v2">
        <div className="flex flex-col items-center justify-start py-navigation-height">
          <SectionTitle
            className={`text-transparent bg-hero-heading-blue bg-clip-text ${poppinsSectionTitle.className}`}
          >
            Services We Offer
          </SectionTitle>
          <SectionSubtitle
            className={`text-[1rem] md:text-[1.1rem] lg:text-xl font-medium`}
          >
            Explore a spectrum of services{" "}
            <span className="font-bold">
              designed to shape your business destiny
            </span>
            . From business licensing to tapping into Dubai&apos;s booming
            tourism industry, GDC Services equips you with the tools you need to
            thrive. Your success story starts here.
          </SectionSubtitle>
          <SectionBody>
            <PageTitle extendedClassName="pb-3">Business Licensing</PageTitle>
            <p className="pb-3">
              Secure the perfect business license in the UAE with Growlytic. We
              simplify the acquisition process for professional, industrial,
              tourism, and commercial licenses. Focus on your business while we
              handle the paperwork and legalities.
            </p>
            <LicensingTiles />
            <ExpandingLink
              linkClassName="border border-2 border-black mb-6"
              iconClassName="fill-black"
              color=""
              href="/services#licensing"
              size={"md"}
            >
              Explore Licensing Services
            </ExpandingLink>
            <PageTitle extendedClassName="pb-3">Company Setup</PageTitle>
            <p className="pb-3">
              Ready to turn your ideas into a flourishing enterprise? GDC
              Services offers comprehensive solutions for company setup in
              Dubai. Our expertise spans across jurisdictions, ensuring a smooth
              journey as you establish your business presence.
            </p>
            <CompanySetupTiles />
            <ExpandingLink
              linkClassName="border border-2 border-black mb-6"
              iconClassName="fill-black"
              color=""
              href="/services#company-setup"
              size={"md"}
            >
              Explore Company Setup Services
            </ExpandingLink>
            <PageTitle extendedClassName="pb-3">Visa Services</PageTitle>
            <p className="pb-3">
              Settle into the future with confidence through UAE&apos;s 10-Year
              Golden Visa. Join the league of visionary investors, and enjoy the
              freedom to thrive. GDC Services is your gateway to securing a
              long-term residency that aligns with your business ambitions.
            </p>
            <VisaTiles />
            <ExpandingLink
              linkClassName="border border-2 border-black mb-6"
              iconClassName="fill-black"
              color=""
              href="/services#visa"
              size={"md"}
            >
              Explore Visa Services
            </ExpandingLink>
            <PageTitle extendedClassName="pb-3">
              VAT, Taxes & Other Services
            </PageTitle>
            <p className="pb-3">
              Elevate your business potential with Growlytic&apos;s
              comprehensive suite of services. From strategic management
              consultancy and financial guidance to seamless process design,
              trademark registration, and international tax planning &#8212; our
              expert offerings empower your growth journey at every step.
            </p>
            <VatTaxTiles />
            <ExpandingLink
              linkClassName="border border-2 border-black mb-6"
              iconClassName="fill-black"
              color=""
              href="/services#other"
              size={"md"}
            >
              Explore VAT, Tax & Other Services
            </ExpandingLink>
          </SectionBody>
        </div>
      </Container>
      {/* <Container className="bg-page-gradient">
        <div className="flex flex-col items-center justify-start py-navigation-height">
          <SectionTitle
            className={`text-transparent bg-hero-heading-blue bg-clip-text ${poppinsSectionTitle.className}`}
          >
            Our Pricing
          </SectionTitle>
          <SectionSubtitle
            className={`text-[1rem] md:text-[1.1rem] lg:text-xl font-medium`}
          >
            Explore a spectrum of services designed to shape your business
            destiny. From commercial and industrial licensing to tapping into
            Dubai&apos;s booming tourism industry, GDC Services equips you with
            the tools you need to thrive. Your success story starts here.
          </SectionSubtitle> *
           <SectionBody>
            <div className="grid grid-cols-4 gap-4 border">
              <div className="border">01</div>
              <div className="border">09</div>
              <div className="border">01</div>
              <div className="border">09</div>
              <div className="border">01</div>
              <div className="border">09</div>
              <div className="border">01</div>
            </div>
            <p>
              Company Setup: Title: &ldquo;Building Your Business Base&rdquo;
              Description: &ldquo;Ready to turn your ideas into a flourishing
              enterprise? GDC Services offers comprehensive solutions for
              company setup in Dubai. Our expertise spans across jurisdictions,
              ensuring a smooth journey as you establish your business
              presence.&rdquo;
            </p>{" "}
            <p>
              10 Year Visa: Title: &ldquo;Securing Your Future&rdquo;
              Description: &ldquo;Settle into the future with confidence through
              UAE&apos;s 10-Year Golden Visa. Join the league of visionary
              investors, and enjoy the freedom to thrive. GDC Services is your
              gateway to securing a long-term residency that aligns with your
              business ambitions.&rdquo;
            </p>
          </SectionBody>
        </div>
      </Container> */}
      <Container className="bg-hero-heading-blue">
        <div className="flex flex-col items-center justify-start text-white py-navigation-height">
          <SectionTitle className={`${poppinsSectionTitle.className}`}>
            Our Story, Your Success
          </SectionTitle>
          <SectionSubtitle
            className={`text-[1rem] md:text-[1.1rem] lg:text-xl font-normal`}
          >
            GDC Services is your gateway to streamlined business setup in Dubai,
            UAE. Our journey since 2020 has been marked by enabling countless
            entrepreneurs to conquer challenges and seize opportunities. Join us
            to realize your business ambitions.
          </SectionSubtitle>
          <SectionBody>
            <CompanyStatsSection className="pb-4" />
            <ExpandingLink
              linkClassName="border border-2 border-white whitespace-nowrap truncate"
              iconClassName="fill-white"
              color=""
              href="/about"
              size={"lg"}
            >
              Read More
            </ExpandingLink>
          </SectionBody>
        </div>
      </Container>
      <Container className="bg-page-gradient">
        <div className="flex flex-col items-center justify-start py-navigation-height">
          <SectionTitle
            className={`text-transparent bg-hero-heading-blue bg-clip-text ${poppinsSectionTitle.className}`}
          >
            Get in touch
          </SectionTitle>
          <SectionSubtitle
            className={`text-[1rem] md:text-[1.1rem] lg:text-xl font-medium`}
          >
            We&apos;re always <OnlineBubble /> for you. Give us a ring when
            you&apos;re ready to take your business to the next level.
          </SectionSubtitle>

          <SectionBody>
            <div className="flex flex-col-reverse items-center w-full space-y-5 md:flex-row-reverse md:space-y-0">
              <ContactSection />
              <CallingGirl
                scale={0.15}
                className="hidden md:block w-[40%] scale-y-[1.7] scale-x-[-1.7] h-full"
              />
            </div>
          </SectionBody>
        </div>
      </Container>
      <ScrollToTop
        offSet={10}
        className="motion-safe:animate-bounce bottom-2 left-2"
      />
    </>
  );
}
