import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import { ArrowUpRightIcon } from "../icons/arrowUpRight";

interface ExpandingLinkProps extends VariantProps<typeof expandingLinkClasses> {
  children: React.ReactNode;
  linkClassName?: string;
  iconClassName?: string;
  href: string;
  color?: string;
}

const expandingLinkClasses = cva(
  "rounded-[0.375rem] inline-flex items-center",
  {
    variants: {
      size: {
        sm: "text-sm font-semibold px-2 min-h-4 w-fit",
        md: "text-md font-semibold px-3 py-1 min-h-5 w-fit",
        lg: "text-lg font-semibold px-4 py-3 min-h-6 w-fit",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export const ExpandingLink = ({
  children,
  linkClassName,
  iconClassName,
  href = "",
  color,
  size,
}: ExpandingLinkProps) => {
  return (
    <Link
      href={href}
      className={`${expandingLinkClasses({ size })} ${linkClassName || ""}`}
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
