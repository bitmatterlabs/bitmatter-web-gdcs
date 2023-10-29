import { Poppins } from "next/font/google";
import { Container } from "../components/common/container";
import { ScrollToTop } from "../components/common/scrollToTop";
import {
  SectionBody,
  SectionSubtitle,
  SectionTitle,
} from "../components/common/sectionTitle";
import { Team } from "../components/about/team";
import { PageTitle } from "../components/common/pageTitle";
import { TickIcon } from "../components/icons/tick";
import { ExpandingLink } from "../components/common/expandingLink";

const poppinsSectionTitle = Poppins({
  subsets: ["latin"],
  weight: ["700"],
  style: "normal",
  preload: true,
});

export default function About() {
  return (
    <>
      <Container className="bg-page-primary-v2">
        <div className="flex flex-col items-center justify-start pb-navigation-height min-h-[calc(100vh_-_var(--navigation-height))]">
          <SectionTitle
            className={`text-transparent bg-heading-secondary bg-clip-text ${poppinsSectionTitle.className}`}
          >
            Who are we?
          </SectionTitle>
          <SectionSubtitle
            className={`text-[1rem] md:text-[1.1rem] lg:text-xl font-medium border-b border-black-a08`}
          >
            <span className="font-bold">
              Growlytic Documents Clearing Services
            </span>{" "}
            is a leading Business Consultant in UAE offering the best services
            in helping aspiring entrepreneurs to set up business in Dubai, UAE.
            Incepted in 2020, GDC has very well gained immense recognition and
            has been one of the most preferred business solutions providers.
          </SectionSubtitle>
          <SectionBody>
            <div className="flex flex-col space-y-4">
              <div id="why" className="flex flex-col w-full space-y-3 pt-navigation-height">
                <PageTitle>Why GDC Services?</PageTitle>
                <p className="text-xl font-bold">
                  <TickIcon className="inline-block w-5 mr-1 aspect-square" />
                  We&apos;re committed to help entrepreneurs set up business in
                  Dubai, UAE
                </p>
                <p>
                  The professionals at GDC offer comprehensive services in
                  assisting businesses from startups to large businesses with
                  the necessary legalities and other guidance to set up the
                  business, develop as well as make a prominent presence in the
                  UAE market, bet it Mainland, Freezone or the Offshore. Apart
                  from the company formation procedures, Growlytic offers
                  various Government Approvals such as municipality, RERA, Civil
                  Defense, SERA Approval, National Media Council (NMC) Approvals
                  etc. Growlytic also offers Instant Trade License with Virtual
                  Office, PRO services, Tax & Legal Advisory Services, Visa &
                  License Renewals, ISO Registration, Trademark & Attestation
                  services and other necessary approvals from Dubai Regulatory
                  Authorities.
                </p>
                <p className="text-xl font-bold">
                  <TickIcon className="inline-block w-5 mr-1 aspect-square" />
                  We&apos;re known to be offering the best Company formation
                  service in Dubai
                </p>
                <p>
                  GDC is indeed proud to have assisted large number of customers
                  providing them with customized corporate solutions to set up
                  business in Dubai, UAE. It is a matter of pride to the
                  organization to have made the life of entrepreneurs easier
                  with the company formation assistance in UAE.
                </p>
              </div>
              <div id="team" className="flex flex-col w-full space-y-3 pt-navigation-height">
                <PageTitle>Meet the Team</PageTitle>
                <p>
                  At Growlytic, the leadership and the visionary along with this
                  highly enthusiastic team of professionals, have made this a
                  place where inspiration meets dedication and has successfully
                  built a happy clientele. Well, that&apos;s the pride of the
                  Growlytic.
                </p>
                <p>
                  With a vast exposure in the UAE market and expertise in
                  business formation, the people behind this venture
                  collectively work towards a common goal of customer
                  satisfaction. It is the pledge of the management that any
                  investor looking forward to set up a business in UAE under any
                  jurisdiction, would be given the right guidance and be taken
                  through the journey of company formation with simplified
                  solutions.
                </p>
                <p>
                  The Growlytic has been a success story as a result of the same
                  enthusiasm they could carry with them at every step. The
                  management still has plans to diversify and expand its reach
                  in future, all for the convenience and easiness for its
                  esteemed clientele.
                </p>
                <Team className="pt-3" />
                <ExpandingLink
                  linkClassName="border border-2 border-black w-fit"
                  iconClassName="fill-black"
                  color=""
                  href="/contact"
                  size={"lg"}
                >
                  Contact Us
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
