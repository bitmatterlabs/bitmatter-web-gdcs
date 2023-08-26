import { Poppins } from "next/font/google";
import { Container } from "../components/common/container";
import { ScrollToTop } from "../components/common/scrollToTop";

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
            Hey Company
          </div>
        </div>
      </Container>
      <ScrollToTop
        offSet={10}
        className="motion-safe:animate-bounce bottom-2 left-2"
      />
    </>
  );
}
