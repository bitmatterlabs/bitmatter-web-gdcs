const companyStats = [
  {
    key: "contact-1",
    title: "Since",
    mainClassName: "",
    titleClassName: "font-medium text-lg",
    contentClassName: "font-bold text-4xl",
    content: "2020",
  },
  {
    key: "contact-2",
    title: "Trusted Clients",
    mainClassName: "",
    titleClassName: "font-medium text-lg",
    contentClassName: "font-bold text-4xl",
    content: "30+",
  },
  {
    key: "contact-3",
    title: "Unique Services",
    mainClassName: "",
    titleClassName: "font-medium text-lg",
    contentClassName: "font-bold text-4xl",
    content: "20+",
  },
];

export const CompanyStatsSection = ({ className }: { className?: string }) => {
  return (
    <div
      className={`w-full flex-grow grid grid-cols-1 md:grid-cols-3 gap-4 [&_div]:flex [&>p]:whitespace-nowrap [&_div]:flex-col [&_div]:items-start [&_div]:border-2 [&_div]:rounded-lg [&_div]:p-2 [&_div]:bg-hero-heading-v2 [&_div]:border-black ${
        className || ""
      }`}
    >
      {companyStats.map((stat) => (
        <div key={stat.key} className={stat.mainClassName}>
          <p className={` ${stat.titleClassName}`}>{stat.title}</p>
          <p className={` ${stat.contentClassName}`}>{stat.content}</p>
        </div>
      ))}
    </div>
  );
};
