import { Poppins } from "next/font/google";
import { Container } from "../components/common/container";
import { ScrollToTop } from "../components/common/scrollToTop";
import {
  SectionBody,
  SectionSubtitle,
  SectionTitle,
} from "../components/common/sectionTitle";
import { PageTitle } from "../components/common/pageTitle";
import { ExpandingLink } from "../components/common/expandingLink";
import { LicensingPricing } from "../components/pricing/pricingGrid";

const poppinsSectionTitle = Poppins({
  subsets: ["latin"],
  weight: ["700"],
  style: "normal",
  preload: true,
});

export default function Pricing() {
  return (
    <>
      <Container className="bg-page-primary">
        <div className="flex flex-col items-center justify-start pb-navigation-height min-h-[calc(100vh_-_var(--navigation-height))]">
          <SectionTitle
            className={`text-transparent bg-heading-secondary bg-clip-text ${poppinsSectionTitle.className}`}
          >
            Explore Our Service Pricing
          </SectionTitle>
          <SectionSubtitle
            className={`text-[1rem] md:text-[1.1rem] lg:text-xl font-medium border-b border-black-a08`}
          >
            <span className="font-bold">Discover our tailored packages</span>{" "}
            for Business Licensing, Company Formation, and other services at GDC
            Services. Seamlessly establish your enterprise, secure licenses, and
            navigate compliance effortlessly. Our expertise ensures a smoother,
            cost-effective entrepreneurial journey. Your success is our
            priority.
          </SectionSubtitle>
          <SectionBody>
            <div id="" className="pt-navigation-height">
              <PageTitle extendedClassName="pb-3">Business Licensing</PageTitle>
              <LicensingPricing />
              <ExpandingLink
                linkClassName="border border-2 border-black mb-6"
                iconClassName="fill-black"
                color=""
                href="/services#licensing"
                size={"md"}
              >
                More Details on Licensing Services
              </ExpandingLink>
            </div>

            <div className="flex flex-col space-y-4">
              <div
                id=""
                className="flex flex-col w-full space-y-3 pt-navigation-height"
              >
                <PageTitle>Need Assistance?</PageTitle>
                <p className="text-xl font-bold">
                  Discover Latest Pricing Details
                </p>
                <p>
                  While this page might not list all service-specific packages,
                  we&apos;re here to help. Contact us through your preferred method,
                  and we&apos;ll provide you with the latest pricing information for
                  each service we offer.
                </p>
                <ExpandingLink
                  linkClassName="border border-2 border-black mb-6"
                  iconClassName="fill-black"
                  color=""
                  href="/contact"
                  size={"lg"}
                >
                  Contact Us
                </ExpandingLink>
                <p className="pt-3 text-xl font-bold">Explore Our Services</p>
                <p>
                  Delve into the specifics of each service we provide by
                  visiting our dedicated services page. Discover the
                  comprehensive details you need to make informed decisions.
                </p>
                <ExpandingLink
                  linkClassName="border border-2 border-black mb-6"
                  iconClassName="fill-black"
                  color=""
                  href="/services"
                  size={"lg"}
                >
                  Explore Services
                </ExpandingLink>
              </div>
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
