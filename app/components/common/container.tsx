export const Container = ({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => {
  return (
    <div
      id={`${id || ""}`}
      className={`max-w-100 mx-auto transition-px lg:px-7 md:px-5 px-3 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};
