import { Poppins } from "next/font/google";
import { Container } from "../components/common/container";
import { ScrollToTop } from "../components/common/scrollToTop";
import {
  SectionBody,
  SectionSubtitle,
  SectionTitle,
} from "../components/common/sectionTitle";
import { OnlineBubble } from "../components/common/onlineBubble";
import { ContactSection } from "../components/home/contactDetails";
import { CallingGirl } from "../components/images/assets/callingGirl";

const poppinsSectionTitle = Poppins({
  subsets: ["latin"],
  weight: ["700"],
  style: "normal",
  preload: true,
});

export default function Contact() {
  return (
    <>
      <Container id="contact" className="bg-page-gradient">
        <div className="flex flex-col items-center justify-start pb-navigation-height">
          <SectionTitle
            className={`text-transparent bg-hero-heading-blue bg-clip-text ${poppinsSectionTitle.className}`}
          >
            Get in touch
          </SectionTitle>
          <SectionSubtitle
            className={`text-[1rem] md:text-[1.1rem] lg:text-xl font-medium border-b border-black-a08`}
          >
            We&apos;re always <OnlineBubble /> for you. Reach us when
            you&apos;re ready to take your business to the next level.
          </SectionSubtitle>

          <SectionBody>
            <div className="flex flex-col-reverse items-center w-full space-y-5 md:flex-row-reverse md:space-y-0 pt-navigation-height">
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
