import Link from "next/link";

const contactSubSections = [
  {
    key: "contact-0",
    link: false,
    linkContent: "",
    title: "Address:",
    mainClassName: "lg:col-span-2",
    titleClassName: "font-bold text-xl",
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
    title: "Email us:",
    titleClassName: "font-bold text-xl",
    contentClassName: "",
    content: "growlyticservices@gmail.com",
  },
  {
    key: "contact-2",
    link: true,
    linkContent: "https://wa.me/971585907657",
    title: "WhatsApp:",
    titleClassName: "font-bold text-xl",
    contentClassName: "",
    content: "+971 5859 07657",
  },
  {
    key: "contact-3",
    link: false,
    linkContent: "tel:+971043764904",
    title: "Contact us:",
    titleClassName: "font-bold text-xl",
    contentClassName: "",
    content: (
      <span>
        <Link
          href="tel:+971043764904"
          target="_blank"
          rel="noreferrer noopener"
          className=""
        >
          <p> +971 04 376 4904</p>
        </Link>
        <Link
          href="tel:+971585992421"
          target="_blank"
          rel="noreferrer noopener"
          className=""
        >
          <p> +971 58 599 2421</p>
        </Link>
        <Link
          href="tel:+971585907657"
          target="_blank"
          rel="noreferrer noopener"
          className=""
        >
          <p> +971 58 590 7657</p>
        </Link>
        <Link
          href="tel:+971043703904"
          target="_blank"
          rel="noreferrer noopener"
          className=""
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
          <p className={` ${contactMethod.titleClassName}`}>
            {contactMethod.title}
          </p>
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
          ) : (
            <p className={` ${contactMethod.contentClassName}`}>
              {contactMethod.content}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};
