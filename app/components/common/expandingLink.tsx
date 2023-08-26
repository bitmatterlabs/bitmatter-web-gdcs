import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import { ArrowUpRightIcon } from "../icons/arrowUpRight";

interface ExpandingLinkProps extends VariantProps<typeof expandingLinkClasses> {
  children: React.ReactNode;
  textClassName?: string;
  iconClassName?: string;
  href: string;
  color?: string;
}

const expandingLinkClasses = cva(
  "rounded-[0.375rem] inline-flex items-center",
  {
    variants: {
      size: {
        sm: "text-sm font-semibold px-2 h-4",
        md: "text-md font-semibold px-3 h-5",
        lg: "text-lg font-semibold px-4 h-6",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export const  ExpandingLink = ({
  children,
  textClassName,
  iconClassName,
  href = "",
  color,
  size,
}: ExpandingLinkProps) => {
  return (
    <Link
      href={href}
      className={expandingLinkClasses({ size }) + " " + (textClassName || "")}
    >
      {children}{" "}
      <span>
        <ArrowUpRightIcon
          className={`${iconClassName} ${
            size === "lg"
              ? "w-[1.4rem] h-[1.4rem]"
              : size === "md"
              ? "w-[1.2rem] h-[1.2rem]"
              : "w-[1rem] h-[1rem]"
          }`}
          color={color}
          strokeWidth={0.2}
        />
      </span>
    </Link>
  );
};
