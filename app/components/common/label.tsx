export const Label = ({
  children,
  className,
  extendClassName,
  icon,
}: {
  children: React.ReactNode;
  className?: string;
  extendClassName?: string;
  id?: string;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={`flex items-center justify-center mx-auto w-fit h-fit ${
        className ||
        "px-2 py-1 my-2 font-medium text-xs md:text-sm text-white bg-hero-heading-v2 border rounded-full shadow-md text-center"
      } ${extendClassName || ""}`}
    >
      {children}
      {icon && (
        <div className="hidden w-10 h-full py-1 ml-1 transform translate-x-[0.3rem] bg-white rounded-full md:flex md:justify-center bg-opacity-10">
          {icon}
        </div>
      )}
    </div>
  );
};
