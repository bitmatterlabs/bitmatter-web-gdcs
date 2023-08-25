import Link from "next/link";
import { Container } from "./container";
import { BitmatterFullIcon } from "../icons/bitmatterFull";
import { MessengerIcon } from "../icons/messenger";
import { InstagramIcon } from "../icons/instagram";
import { WhatsappIcon } from "../icons/whatsapp";
import { GrowlyticOldIcon } from "../icons/growlyticOld";

const footerLinks = [
  {
    title: "Services",
    key: "head-0",
    links: [
      { title: "Mainland", href: "#", key: "head-0-link-0" },
      { title: "Offshore", href: "#", key: "head-0-link-1" },
      { title: "Licensing", href: "#", key: "head-0-link-2" },
      { title: "Startups", href: "#", key: "head-0-link-3" },
    ],
  },
  {
    title: "Company",
    key: "head-1",
    links: [
      { title: "About us", href: "#", key: "head-1-link-0" },
      { title: "Contact us", href: "#", key: "head-1-link-1" },
      { title: "Management", href: "#", key: "head-1-link-2" },
    ],
  },
  {
    title: "Resources",
    key: "head-2",
    links: [
      { title: "Community", href: "#", key: "head-2-link-0" },
      { title: "Contact", href: "#", key: "head-2-link-1" },
      { title: "DPA", href: "#", key: "head-2-link-2" },
      { title: "Privacy Policy", href: "#", key: "head-2-link-3" },
      { title: "Terms of service", href: "#", key: "head-2-link-4" },
      { title: "Report a vulnerability", href: "#", key: "head-2-link-5" },
    ],
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear() || "2023";

  return (
    <footer className="py-3 text-sm border-t md:py-5 lg:py-6 border-black-a08 dark:border-white-a08 bg-body-dark text-primary-dark">
      <Container className="flex flex-col space-y-5">
        <div className="flex flex-col justify-between pb-3 border-b border-white-a08 lg:flex-row">
          <div className="flex flex-row flex-wrap justify-between lg:flex-nowrap lg:mr-6 lg:flex-col">
            <div className="flex flex-wrap items-center space-x-2">
              <GrowlyticOldIcon scale={0.12} color="#fff" />
              <span className="hidden text-lg font-normal">
                Growlytic Document Clearing Services
              </span>
            </div>
            <div className="flex flex-col justify-center space-y-2">
              <p className="text-secondary-dark">
                GDC Services, # 604,
                <br />
                A-Block, Business Village,
                <br />
                Near Diera Clock Tower, Dubai, UAE
              </p>
              <div className="flex space-x-3 [&_svg]:fill-secondary-dark [&_svg:hover]:fill-white items-center">
                <Link href="#">
                  <MessengerIcon color="" />
                </Link>
                <Link href="#">
                  <InstagramIcon color="" />
                </Link>
                <Link href="#">
                  <WhatsappIcon color="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            {footerLinks.map((column) => (
              <div
                key={column.key}
                className="flex flex-col min-w-[50%] lg:min-w-[11rem] mt-10 lg:mt-0"
              >
                <h3 className="mb-2 font-medium text-md">{column.title}</h3>
                <ul>
                  {column.links.map((link) => (
                    <li key={link.key} className="[&_a]:last:mb-0">
                      <Link
                        href={link.href}
                        className="block mb-3 transition-colors whitespace-nowrap text-secondary-dark hover:text-white"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center w-full pt-3 text-sm text-slate-300">
          <span className="mr-1">
            &copy;{currentYear} GDC Services. Developed & hosted by{" "}
          </span>
          <Link
            href="https://bitmatterlabs.com"
            target="_blank"
            rel="noreferrer"
          >
            <BitmatterFullIcon
              scale={0.048}
              className="fill-secondary-dark hover:fill-white"
              color=""
            />
          </Link>
        </div>
      </Container>
    </footer>
  );
};
