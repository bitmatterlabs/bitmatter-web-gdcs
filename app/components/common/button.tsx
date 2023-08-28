import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";

interface ButtonProps extends VariantProps<typeof buttonClasses> {
  children: React.ReactNode;
  href: string;
  className?: string;
}

const buttonClasses = cva("rounded-[0.375rem] inline-flex items-center", {
  variants: {
    variant: {
      primary:
        "bg-button-primary hover:shadow-button text-white hover:bg-button-primary-hover hover:text-button-text-hover whitespace-nowrap transition-colors transition-opacity transition-shadow focus:bg-button-primary-hover focus:text-button-text-hover focus:outline-none focus:shadow-button",
      secondary: "bg-button-primary hover:shadow-button text-white hover:bg-button-primary-hover hover:text-button-text-hover whitespace-nowrap transition-colors transition-opacity transition-shadow focus:bg-button-primary-hover focus:text-button-text-hover focus:outline-none focus:shadow-button",
      tertiery: "bg-button-primary hover:shadow-button text-white hover:bg-button-primary-hover hover:text-button-text-hover whitespace-nowrap transition-colors transition-opacity transition-shadow focus:bg-button-primary-hover focus:text-button-text-hover focus:outline-none focus:shadow-button",
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

export const Button = ({
  children,
  href,
  variant,
  size,
  className,
}: ButtonProps) => {
  return (
    <Link
      href={href}
      className={`${buttonClasses({ variant, size })} ${className || ""}`}
    >
      {children}
    </Link>
  );
};
