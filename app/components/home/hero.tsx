import Image from "next/image";
import UAE from "../../components/images/UAE.png";

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
    <div className="flex flex-col flex-nowrap items-center justify-center lg:flex-row-reverse">
      <div className="lg:w-[50rem] lg:mr-6 w-[20rem] mr-0 flex items-center justify-center"><Image className="object-contain" src={UAE} alt="UAE Logo" priority /></div>
      <p className={`text-center lg:text-right ${className || ""}`}>{children}</p>
    </div>
  );
};

export const Hero = ({ children, className }: HeroProps) => {
  return <div className={"text-center " + (className || "")}>{children}</div>;
};
