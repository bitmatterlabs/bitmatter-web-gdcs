interface HeroProps {
  children: React.ReactNode;
  className?: string;
}

interface HeroElementProps {
  children: React.ReactNode;
  className?: string;
}

export const HeroTitle = ({ children, className }: HeroElementProps) => {
  return <h1 className={"text-4xl md:text-6xl lg:text-hero-heading font-bold text-center " + className}>{children}</h1>;
};

export const HeroSubtitle = ({ children, className }: HeroElementProps) => {
  return <p className={"text-hero-sub-heading mb-8 " + className}>{children}</p>;
};

export const Hero = ({ children, className }: HeroProps) => {
  return <div className={"text-center " + className}>{children}</div>;
};
