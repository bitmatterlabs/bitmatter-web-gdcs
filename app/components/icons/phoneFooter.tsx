export const PhoneFooterIcon = ({
  className,
  scale = 1.12,
  color = "#ECECF7",
}: {
  className?: string;
  scale?: number;
  color?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox={"0 0 " + 24 * scale + " " + 24 * scale}
    width={18 * scale}
    height={18 * scale}
    className={"" + (className || "")}
    aria-label="phone icon"
    strokeWidth="1.5"
    stroke={color}
  >
    <g transform={`scale(${scale})`}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
      />
    </g>
  </svg>
);