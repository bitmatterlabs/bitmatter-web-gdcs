export const ArrowUpRightIcon = ({
  className,
  scale = 1,
  color = "#040404",
  strokeWidth = 0,
}: {
  className?: string;
  scale?: number;
  color?: string;
  strokeWidth?: number;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 ${24 * scale} ${24 * scale}`}
    fill={color}
    className={` ${className || ""}`}
    aria-label="hyperlink icon"
    stroke={color}
    strokeWidth={strokeWidth}
  >
    <g transform={`scale(${scale})`}>
      <path
        fill={color}
        d="M17.92,6.62a1,1,0,0,0-.54-.54A1,1,0,0,0,17,6H7A1,1,0,0,0,7,8h7.59l-8.3,8.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L16,9.41V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17.92,6.62Z"
      ></path>
    </g>
  </svg>
);
