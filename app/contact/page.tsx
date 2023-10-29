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
    // <>
    //   <Container className="bg-page-contact">
    //     <div className="flex flex-col items-center justify-start pb-navigation-height">
    //       <SectionTitle
    //         className={`text-transparent bg-heading-secondary bg-clip-text ${poppinsSectionTitle.className}`}
    //       >
    //         Get in touch
    //       </SectionTitle>
    //       <SectionSubtitle
    //         className={`text-[1rem] md:text-[1.1rem] lg:text-xl font-medium border-b border-black-a08`}
    //       >
    //         We&apos;re always <OnlineBubble /> for you. Reach us when
    //         you&apos;re ready to take your business to the next level.
    //       </SectionSubtitle>
    //       <SectionBody>
    //         <div className="flex flex-col-reverse items-center w-full space-y-5 md:flex-row-reverse md:space-y-0 pt-navigation-height">
    //           <ContactSection />
    //           <CallingGirl
    //             scale={0.15}
    //             className="hidden md:block w-[40%] scale-y-[1.7] scale-x-[-1.7] h-full"
    //           />
    //         </div>
    //       </SectionBody>
    //     </div>
    //   </Container>
    //   <ScrollToTop
    //     offSet={10}
    //     className="motion-safe:animate-bounce bottom-2 left-2"
    //   />
    // </>

    <>
      <div className="relative bg-no-repeat bg-cover bg-contact-image max-w-100 mx-auto overflow-x-hidden">
        <div className="z-[0] absolute w-screen h-full bg-black/30 top-0 left-0"></div>
        <div className="z-[0] absolute w-screen h-full bg-contact-bottom bottom-0 left-0"></div>
        <div className="flex flex-col items-center justify-start pb-navigation-height transition-px lg:px-7 md:px-5 px-3">
          <SectionTitle
            className={`z-[10] text-white ${poppinsSectionTitle.className}`}
          >
            Get in touch
          </SectionTitle>
          <SectionSubtitle
            className={`z-[10] text-[1rem] md:text-[1.1rem] lg:text-xl font-medium text-white`}
          >
            We&apos;re always <OnlineBubble /> for you. Give us a ring when
            you&apos;re ready to take your business to the next level.
          </SectionSubtitle>

          <SectionBody>
            <div className="flex flex-col-reverse items-center w-full space-y-5 md:flex-row-reverse md:space-y-0">
              <ContactSection />
            </div>
          </SectionBody>
        </div>
      </div>
    </>
  );
}
