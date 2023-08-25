export const MailIcon = ({
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
        d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm-.41,2-5.88,5.88a1,1,0,0,1-1.42,0L5.41,6ZM20,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V7.41l5.88,5.88a3,3,0,0,0,4.24,0L20,7.41Z"
      ></path>
    </g>
  </svg>
);
