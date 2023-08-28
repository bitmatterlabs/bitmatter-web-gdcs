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
import {
  CompanySetupTilesFull,
  LicensingTilesFull,
  VatTaxTilesFull,
  VisaTilesFull,
} from "../components/services/servicesTilesFull";

const poppinsSectionTitle = Poppins({
  subsets: ["latin"],
  weight: ["700"],
  style: "normal",
  preload: true,
});

export default function Services() {
  return (
    <>
      <Container className="bg-page-primary-v2">
        <div className="flex flex-col items-center justify-start pb-navigation-height min-h-[calc(100vh_-_var(--navigation-height))]">
          <SectionTitle
            className={`text-transparent bg-heading-secondary bg-clip-text ${poppinsSectionTitle.className}`}
          >
            Services We Offer
          </SectionTitle>
          <SectionSubtitle
            className={`text-[1rem] md:text-[1.1rem] lg:text-xl font-medium border-b border-black-a08`}
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
            <div id="licensing" className="pt-navigation-height">
              <PageTitle extendedClassName="pb-3">Business Licensing</PageTitle>
              <p className="pb-3">
                If you&apos;re planning to conduct business in the UAE, securing
                a business license is an essential step. The United Arab
                Emirates offers four primary types of licenses: professional,
                industrial, tourism, and commercial licenses. In Dubai, all
                these significant license categories are accessible for
                businesses.
              </p>
              <p className="pb-3">
                You can effortlessly secure the perfect business license in the
                UAE with Growlytic. We simplify the acquisition process for
                professional, industrial, tourism, and commercial licenses.
                Focus on your business while we handle the paperwork and
                legalities.
              </p>
              <LicensingTilesFull />
              <ExpandingLink
                linkClassName="border border-2 border-black mb-6"
                iconClassName="fill-black"
                color=""
                href="/pricing"
                size={"md"}
              >
                Explore Pricing
              </ExpandingLink>
            </div>
            <div id="company-setup" className="pt-navigation-height">
              <PageTitle extendedClassName="pb-3">Company Setup</PageTitle>
              <p className="pb-3">
                Ready to turn your ideas into a flourishing enterprise? GDC
                Services offers comprehensive solutions for company setup in
                Dubai. Our expertise spans across jurisdictions, ensuring a
                smooth journey as you establish your business presence.
              </p>
              <p className="pb-3">
                At GDC Services, we specialize in efficient company formation
                and setup solutions. Whether you&apos;re eyeing the mainland,
                offshore, or freezone options, our experts have you covered.
                Seamlessly establish your business presence in key UAE
                locations. Our services encompass a wide spectrum of choices
                tailored to your unique needs.
              </p>
              <CompanySetupTilesFull />
              <ExpandingLink
                linkClassName="border border-2 border-black mb-6"
                iconClassName="fill-black"
                color=""
                href="/contact"
                size={"md"}
              >
                Request Pricing
              </ExpandingLink>
            </div>
            <div id="visa" className="pt-navigation-height">
              <PageTitle extendedClassName="pb-3">Visa Services</PageTitle>
              <p className="pb-3">
                Settle into the future with confidence through UAE&apos;s
                10-Year Golden Visa. Join the league of visionary investors, and
                enjoy the freedom to thrive. GDC Services is your gateway to
                securing a long-term residency that aligns with your business
                ambitions.
              </p>
              <VisaTilesFull />
              <ExpandingLink
                linkClassName="border border-2 border-black mb-6"
                iconClassName="fill-black"
                color=""
                href="/contact"
                size={"md"}
              >
                Request Pricing
              </ExpandingLink>
            </div>
            <div id="other" className="pt-navigation-height">
              <PageTitle extendedClassName="pb-3">
                VAT, Taxes & Other Services
              </PageTitle>
              <p className="pb-3">
                Elevate your business potential with Growlytic&apos;s
                comprehensive suite of services. From strategic management
                consultancy and financial guidance to seamless process design,
                trademark registration, and international tax planning &#8212;
                our expert offerings empower your growth journey at every step.
              </p>
              <VatTaxTilesFull />
              <ExpandingLink
                linkClassName="border border-2 border-black mb-6"
                iconClassName="fill-black"
                color=""
                href="/contact"
                size={"md"}
              >
                Request Pricing
              </ExpandingLink>
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
