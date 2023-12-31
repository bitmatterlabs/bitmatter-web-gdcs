interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

interface SectionElementProps {
  children: React.ReactNode;
  className?: string;
}

interface SectionBodyProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionTitle = ({ children, className }: SectionElementProps) => {
  return (
    <h1
      className={`text-3xl md:text-4xl lg:text-5xl text-left pt-5 pb-3 w-full md:w-[80vw] lg:w-[70vw] ${
        className || ""
      }`}
    >
      <span className="flex items-center justify-start">{children}</span>
    </h1>
  );
};

export const SectionSubtitle = ({
  children,
  className,
}: SectionElementProps) => {
  return (
    <p
      className={`text-xl font-medium text-left w-full md:w-[80vw] lg:w-[70vw] pb-4 ${
        className || ""
      }`}
    >
      {children}
    </p>
  );
};

export const SectionBody = ({ children, className }: SectionElementProps) => {
  return (
    <div className={`w-full md:w-[80vw] lg:w-[70vw] pb-5 ${className || ""}`}>
      {children}
    </div>
  );
};

export const Section = ({ children, className }: SectionProps) => {
  return <div className={`text-center ${className || ""}`}>{children}</div>;
};
