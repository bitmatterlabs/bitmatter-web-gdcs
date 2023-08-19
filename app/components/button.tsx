import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";

interface ButtonProps extends VariantProps<typeof buttonClasses> {
  children: React.ReactNode;
  href: string;
}

const buttonClasses = cva("rounded-full inline-flex items-center", {
  variants: {
    variant: {
      primary: "bg-gradient-button-v2 button-text-shadow hover:shadow-button dark:hover:shadow-button-dark text-white whitespace-nowrap transition-colors transition-opacity transition-shadow",
      secondary: "bg-gradient-button-primary",
      tertiery: "bg-gradient-button-primary",
    },
    size: {
      xs: "text-xs px-1 h-3",
      sm: "text-sm px-2 h-4",
      md: "text-md px-3 h-5",
      lg: "text-lg px-4 h-6",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export const Button = ({ children, href, variant, size }: ButtonProps) => {
  return (
    <Link href={href} className={buttonClasses({ variant, size })}>
      {children}
    </Link>
  );
};
