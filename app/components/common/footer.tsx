import Link from "next/link";
import { Container } from "./container";
import { BitmatterFullIcon } from "../icons/bitmatterFull";
import { WhatsappIcon } from "../icons/whatsapp";
import { GrowlyticOldIcon } from "../icons/growlyticOld";
import { PhoneFooterIcon } from "../icons/phoneFooter";
import { EmailFooterIcon } from "../icons/emailFooter";

const footerLinks = [
  {
    title: "Services",
    key: "head-0",
    links: [
      { title: "Licensing", href: "/services#licensing", key: "head-0-link-0" },
      { title: "Company Setup", href: "/services#company-setup", key: "head-0-link-1" },
      { title: "Visa", href: "/services#visa", key: "head-0-link-2" },
      { title: "VAT, Tax & Others", href: "/services#other", key: "head-0-link-3" },
    ],
  },
  {
    title: "Company",
    key: "head-1",
    links: [
      { title: "About us", href: "/about", key: "head-1-link-0" },
      { title: "Why Choose GDC?", href: "/about#why", key: "head-1-link-1" },
      { title: "Team", href: "/about#team", key: "head-1-link-2" },
      { title: "Contact us", href: "/contact", key: "head-1-link-3" },
    ],
  },
  {
    title: "Pricing",
    key: "head-2",
    links: [
      { title: "Licensing", href: "/pricing", key: "head-2-link-0" },
      { title: "Get a quotation", href: "/contact", key: "head-2-link-1" },
    ],
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear() || "2023";

  return (
    <footer className="py-3 text-sm border-t md:py-5 lg:py-6 border-black-a08 bg-body-dark text-primary-dark">
      <Container className="flex flex-col space-y-5">
        <div className="flex flex-col justify-between pb-3 border-b border-white-a08 lg:flex-row">
          <div className="flex flex-row flex-wrap justify-between lg:flex-nowrap lg:mr-6 lg:flex-col">
            <div className="flex flex-wrap items-center space-x-2 pb-3  mr-3 lg:mr-0">
              <GrowlyticOldIcon scale={0.12} color="#fff" />
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
                <Link href="mailto:growlyticservices@gmail.com">
                  <EmailFooterIcon color="" />
                </Link>
                <Link href="tel:+97143703904">
                  <PhoneFooterIcon className="stroke-secondary-dark hover:stroke-white" color="" />
                </Link>
                <Link href="https://wa.me/971585907657">
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
