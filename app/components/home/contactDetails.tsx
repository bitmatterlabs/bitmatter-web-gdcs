import Link from "next/link";
import { WhatsappIcon } from "../icons/whatsapp";
import { PhoneFooterIcon } from "../icons/phoneFooter";
import { EmailFooterIcon } from "../icons/emailFooter";
import { AddressIcon } from "../icons/address";

const contactSubSections = [
  {
    key: "contact-0",
    link: false,
    linkContent: "",
    contentType: "text",
    title: "Address:",
    mainClassName: "lg:col-span-2",
    titleClassName: "font-bold text-xl",
    titleIcon: (
      <AddressIcon
        className="opacity-100 grayscale-0 fill-white"
        color=""
        scale={1.3}
      />
    ),
    contentClassName: "",
    content: (
      <>
        GDC Services
        <br /># 604, A-Block,
        <br />
        Business Village,
        <br />
        Near Diera Clock Tower,
        <br />
        Dubai, UAE
      </>
    ),
  },
  {
    key: "contact-1",
    link: true,
    linkContent: "mailto:growlyticservices@gmail.com",
    contentType: "text",
    title: "Email us:",
    titleClassName: "font-bold text-xl",
    titleIcon: (
      <EmailFooterIcon
        className="opacity-100 grayscale-0 fill-white"
        color=""
        scale={1.3}
      />
    ),
    contentClassName: "",
    content: "growlyticservices@gmail.com",
  },
  {
    key: "contact-2",
    link: false,
    contentType: "html",
    linkContent: "https://wa.me/971585907657",
    title: "WhatsApp:",
    titleClassName: "font-bold text-xl",
    titleIcon: (
      <WhatsappIcon
        className="opacity-100 grayscale-0 fill-white"
        color=""
        scale={1.3}
      />
    ),
    contentClassName: "",
    content: (
      <span>
        <Link
          href="https://wa.me/971585992421"
          target="_blank"
          rel="noreferrer noopener"
          className="w-fit"
        >
          <p> +971 58 599 2421</p>
        </Link>
        <Link
          href="https://wa.me/971585907657"
          target="_blank"
          rel="noreferrer noopener"
          className="w-fit"
        >
          <p>+971 58 590 7657</p>
        </Link>
      </span>
    ),
  },
  {
    key: "contact-3",
    link: false,
    contentType: "html",
    linkContent: "tel:+971043764904",
    title: "Contact us:",
    titleClassName: "font-bold text-xl",
    titleIcon: (
      <PhoneFooterIcon
        className="opacity-100 grayscale-0 fill-white"
        color="white"
        scale={1.3}
      />
    ),
    contentClassName: "",
    content: (
      <span>
        {/* <Link
          href="tel:+971043764904"
          target="_blank"
          rel="noreferrer noopener"
          className="w-fit"
        >
          <p> +971 04 376 4904</p>
        </Link> */}
        <Link
          href="tel:+971585992421"
          target="_blank"
          rel="noreferrer noopener"
          className="w-fit"
        >
          <p> +971 58 599 2421</p>
        </Link>
        <Link
          href="tel:+971585907657"
          target="_blank"
          rel="noreferrer noopener"
          className="w-fit"
        >
          <p> +971 58 590 7657</p>
        </Link>
        <Link
          href="tel:+971043703904"
          target="_blank"
          rel="noreferrer noopener"
          className="w-fit"
        >
          <p> +971 04 370 3904</p>
        </Link>
      </span>
    ),
  },
];

export const ContactSection = () => {
  return (
    <div className="w-full flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 [&_div]:flex [&_a]:flex [&>p]:whitespace-nowrap [&_div]:flex-col [&_a]:flex-col text-white font-medium [&_div]:overflow-hidden [&_div]:min-h-[8rem] [&_a]:overflow-hidden [&_p]:z-[1]">
      {contactSubSections.map((contactMethod) => (
        <div key={contactMethod.key} className="">
          <span className="flex flex-row items-center space-x-2">
            {contactMethod.titleIcon}
            <p className={` ${contactMethod.titleClassName}`}>
              {contactMethod.title}
            </p>
          </span>
          {contactMethod.link ? (
            <Link
              href={contactMethod.linkContent}
              key={contactMethod.key}
              target="_blank"
              rel="noreferrer noopener"
              className=""
            >
              <p className={` ${contactMethod.contentClassName}`}>
                {contactMethod.content}
              </p>
            </Link>
          ) : contactMethod.contentType === "text" ? (
            <p className={` ${contactMethod.contentClassName}`}>
              {contactMethod.content}
            </p>
          ) : (
            contactMethod.content
          )}
        </div>
      ))}
    </div>
  );
};
