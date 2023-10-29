export const PageTitle = ({
  children,
  className,
  extendedClassName,
}: {
  children: React.ReactNode;
  className?: string;
  extendedClassName?: string;
}) => {
  return (
    <p className={` ${className || "text-2xl md:text-3xl font-extrabold pt-3"} ${extendedClassName}`}>
      {children}
    </p>
  );
};
