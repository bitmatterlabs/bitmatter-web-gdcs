export const PageTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <p className={` ${className || "text-3xl font-extrabold pt-3"}`}>{children}</p>;
};
