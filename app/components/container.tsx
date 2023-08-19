export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={
        "max-w-100 mx-auto transition-px lg:px-7 md:px-5 px-3 " +
        className
      }
    >
      {children}
    </div>
  );
};
