const companyStats = [
  {
    key: "cs-0",
    title: "Since",
    mainClassName: "",
    titleClassName: "font-medium text-lg",
    contentClassName: "font-bold text-4xl",
    content: "2020",
  },
  {
    key: "cs-1",
    title: "Trusted Clients",
    mainClassName: "",
    titleClassName: "font-medium text-lg",
    contentClassName: "font-bold text-4xl",
    content: "30+",
  },
  {
    key: "cs-2",
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
      className={`w-full text-white flex-grow grid grid-cols-1 md:grid-cols-3 gap-4 [&_div]:flex [&>p]:whitespace-nowrap [&_div]:flex-col [&_div]:items-start [&_div]:rounded-lg [&_div]:p-2 [&_div]:bg-card-tertiery ${
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
