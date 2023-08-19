import Link from "next/link";
import { Container } from "./container";
import { TwitterIcon } from "./icons/twittter";
import { SlackIcon } from "./icons/slack";
import { GithubIcon } from "./icons/github";
import { GrowlyticFullIcon } from "./icons/growlyticFull";
import { BitmatterLargeIcon } from "./icons/bitmatter";

const footerLinks = [
  {
    title: "Product",
    links: [
      { title: "Features", href: "#" },
      { title: "Integrations", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "Changelog", href: "#" },
      { title: "Docs", href: "#" },
      { title: "Linear Method", href: "#" },
      { title: "Downloads", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About us", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Brand", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Community", href: "#" },
      { title: "Contact", href: "#" },
      { title: "DPA", href: "#" },
      { title: "Privacy Policy", href: "#" },
      { title: "Terms of service", href: "#" },
      { title: "Report a vulnerability", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { title: "API", href: "#" },
      { title: "Status", href: "#" },
      { title: "GitHub", href: "#" },
    ],
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear() || "2023";

  return (
    <footer className="py-6 text-sm border-t border-black-a08 dark:border-white-a08 bg-body-dark text-primary-dark">
      <Container className="flex flex-col space-y-5">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="flex flex-row flex-wrap justify-between lg:flex-nowrap lg:mr-6 lg:flex-col">
            <GrowlyticFullIcon className="fill-logo-dark" color="" />
            <div className="flex space-x-3 [&_a]:text-secondary-dark [&_a:hover]:text-white">
              <Link href="#">
                <TwitterIcon />
              </Link>
              <Link href="#">
                <GithubIcon />
              </Link>
              <Link href="#">
                <SlackIcon />
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap">
            {footerLinks.map((column) => (
              <div className="flex flex-col min-w-[50%] lg:min-w-[11rem] mt-10 lg:mt-0">
                <h3 className="mb-2 font-medium text-md">{column.title}</h3>
                <ul>
                  {column.links.map((link) => (
                    <li className="[&_a]:last:mb-0">
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
        <div className="flex items-center w-full justify-center pt-3 text-slate-300 text-sm">
          <span className="mr-1">
            &copy;{currentYear} GDC Services. Developed & hosted by{" "}
          </span>
          <Link href="https://bitmatterlabs.com">
            <BitmatterLargeIcon scale={0.048} />
          </Link>
        </div>
      </Container>
    </footer>
  );
};
