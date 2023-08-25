import Link from "next/link";
import { AtIcon } from "../icons/at";
import { CommentAltMessageIcon } from "../icons/commentAltMessage";
import { MailIcon } from "../icons/mail";
import { PhoneIcon } from "../icons/phone";

const companyStats = [
  {
    key: "contact-0",
    link: false,
    linkContent: "",
    title: "Address",
    mainClassName: "lg:col-span-2",
    titleClassName: "font-bold",
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
    titleClassName: "font-bold",
    image: <AtIcon color="" />,
    contentClassName: "",
    content: "growlyticservices@gmail.com",
  },
  {
    key: "contact-2",
    link: true,
    linkContent: "https://wa.me/97143703904",
    title: "WhatsApp",
    mainClassName: "",
    titleClassName: "font-bold",
    image: <CommentAltMessageIcon color="" />,
    contentClassName: "",
    content: "+971 4370 3904",
  },
  {
    key: "contact-3",
    link: true,
    linkContent: "tel:+97143703904",
    title: "Phone",
    mainClassName: "",
    titleClassName: "font-bold",
    image: <PhoneIcon color="" />,
    contentClassName: "",
    content: "+971 4370 3904",
  },
];

export const CompanyStatsSection = () => {
  return (
    <div className="w-full flex-grow grid grid-cols-1 lg:grid-cols-3 gap-4 [&_div]:flex [&_a]:flex [&>p]:whitespace-nowrap [&_div]:relative [&_a]:relative [&_div]:flex-col [&_a]:flex-col [&_div]:space-y-4 [&_a]:space-y-4 [&_div]:items-start [&_a]:items-start [&_a]:bg-[#ECEFF1] [&_a:hover]:bg-hero-heading-blue [&_div]:bg-[#ECEFF1] [&_div:hover]:bg-hero-heading-blue [&_div:hover]:text-white [&_a:hover]:text-white text-black [&_div]:justify-between [&_a]:justify-between [&_div]:p-2 [&_a]:p-2 [&_div]:rounded-[0.375rem] [&_a]:rounded-[0.375rem] font-medium [&_div]:border [&_a]:border [&_div]:overflow-hidden [&_a]:overflow-hidden [&_svg]:-bottom-6 [&_svg]:z-[0] [&_p]:z-[1] [&_svg]:fill-[#CFD8DC] [&_svg]:-right-5 [&_svg]:w-[10rem] [&_svg]:aspect-square [&_svg]:absolute">
      {companyStats.map((contactMethod) => (
        <div key={contactMethod.key} className={contactMethod.mainClassName}>
          <p className={` ${contactMethod.titleClassName}`}>
            {contactMethod.title}
          </p>
          <p className={` ${contactMethod.contentClassName}`}>
            {contactMethod.content}
          </p>
          {contactMethod.image}
        </div>
      ))}
    </div>
  );
};
