export const BoltIcon = ({
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
    aria-label="messenger logo"
  >
    <g transform={`scale(${scale})`}>
      <path
        fill={color}
        d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
      ></path>
    </g>
  </svg>
);
