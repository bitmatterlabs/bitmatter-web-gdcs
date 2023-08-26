export const CommentAltMessageIcon = ({
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
    aria-label="comment alt message icon"
    stroke={color}
    strokeWidth={strokeWidth}
  >
    <g transform={`scale(${scale})`}>
      <path
        fill={color}
        d="M17,7H7A1,1,0,0,0,7,9H17a1,1,0,0,0,0-2Zm0,4H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm2-9H5A3,3,0,0,0,2,5V15a3,3,0,0,0,3,3H16.59l3.7,3.71A1,1,0,0,0,21,22a.84.84,0,0,0,.38-.08A1,1,0,0,0,22,21V5A3,3,0,0,0,19,2Zm1,16.59-2.29-2.3A1,1,0,0,0,17,16H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z"
      ></path>
    </g>
  </svg>
);
