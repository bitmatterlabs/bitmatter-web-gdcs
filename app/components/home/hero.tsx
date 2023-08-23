interface HeroProps {
  children: React.ReactNode;
  className?: string;
}

interface HeroElementProps {
  children: React.ReactNode;
  className?: string;
}

export const HeroTitle = ({ children, className }: HeroElementProps) => {
  return (
    <h1
      className={
        "text-5xl md:text-6xl lg:text-7xl font-bold text-center " +
        (className || "")
      }
    >
      {children}
    </h1>
  );
};

export const HeroSubtitle = ({ children, className }: HeroElementProps) => {
  return (
    <p className={"text-hero-sub-heading " + (className || "")}>{children}</p>
  );
};

export const Hero = ({ children, className }: HeroProps) => {
  return <div className={"text-center " + (className || "")}>{children}</div>;
};
