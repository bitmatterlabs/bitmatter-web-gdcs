import Link from "next/link";
import { AtIcon } from "../icons/at";
import { CommentAltMessageIcon } from "../icons/commentAltMessage";
import { MailIcon } from "../icons/mail";
import { PhoneIcon } from "../icons/phone";

const contactSubSections = [
  {
    key: "contact-0",
    link: false,
    linkContent: "",
    title: "Address",
    mainClassName: "lg:col-span-2",
    titleClassName: "font-bold text-xl",
    image: <MailIcon color="" />,
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
    title: "Inquiries",
    mainClassName: "lg:col-span-2 ",
    titleClassName: "font-bold text-xl",
    image: <AtIcon color="" />,
    contentClassName: "",
    content: "growlyticservices@gmail.com",
  },
  {
    key: "contact-2",
    link: true,
    linkContent: "https://wa.me/971585907657",
    title: "WhatsApp",
    mainClassName: "",
    titleClassName: "font-bold text-xl",
    image: <CommentAltMessageIcon color="" />,
    contentClassName: "",
    content: "+971 5859 07657",
  },
  {
    key: "contact-3",
    link: true,
    linkContent: "tel:+97143703904",
    title: "Phone",
    mainClassName: "",
    titleClassName: "font-bold text-xl",
    image: <PhoneIcon color="" />,
    contentClassName: "",
    content: "+971 0437 64904",
  },
];

export const ContactSection = () => {
  return (
    <div className="w-full flex-grow grid grid-cols-1 lg:grid-cols-2 gap-4 [&_div]:flex [&_a]:flex [&>p]:whitespace-nowrap [&_div]:relative [&_a]:relative [&_div]:flex-col [&_a]:flex-col [&_div]:space-y-4 [&_a]:space-y-4 [&_div]:items-start [&_a]:items-start [&_a]:bg-card-tertiery [&_div]:bg-card-tertiery text-white [&_div]:justify-between [&_a]:justify-between [&_div]:p-2 [&_a]:p-2 [&_div]:rounded-[0.375rem] [&_a]:rounded-[0.375rem] font-medium [&_div]:overflow-hidden [&_div]:min-h-[8rem] [&_a]:min-h-[8rem] [&_a]:overflow-hidden [&_svg]:-bottom-[3.5rem] [&_svg]:z-[0] [&_p]:z-[1] [&_svg]:fill-white [&_svg]:opacity-20 [&_svg]:-right-5 [&_svg]:w-[10rem] [&_svg]:aspect-square [&_svg]:absolute">
      {contactSubSections.map((contactMethod) =>
        contactMethod.link ? (
          <Link
            href={contactMethod.linkContent}
            key={contactMethod.key}
            target="_blank"
            rel="noreferrer noopener"
            className={contactMethod.mainClassName}
          >
            <p className={` ${contactMethod.titleClassName}`}>
              {contactMethod.title}
            </p>
            <p className={` ${contactMethod.contentClassName}`}>
              {contactMethod.content}
            </p>
            {contactMethod.image}
          </Link>
        ) : (
          <div key={contactMethod.key} className={contactMethod.mainClassName}>
            <p className={` ${contactMethod.titleClassName}`}>
              {contactMethod.title}
            </p>
            <p className={` ${contactMethod.contentClassName}`}>
              {contactMethod.content}
            </p>
            {contactMethod.image}
          </div>
        )
      )}
    </div>
  );
};
