export const TickIcon = ({
  className,
  scale = 1,
  colorOuter = "#6b544c",
  colorInner = "#6b544c",
}: {
  className?: string;
  scale?: number;
  colorOuter?: string;
  colorInner?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 ${24 * scale} ${24 * scale}`}
    fill="none"
    className={` ${className || ""}`}
    aria-label="hyperlink icon"
  >
    <g transform={`scale(${scale})`}>
      <path
        d="M19 12C19 13.4776 18.5324 14.9173 17.6642 16.113C16.796 17.3086 15.5717 18.1989 14.1667 18.6562C12.7616 19.1136 11.2479 19.1146 9.84223 18.6591C8.43657 18.2037 7.21109 17.315 6.34129 16.1206C5.47149 14.9261 5.00198 13.487 5.00001 12.0094C4.99803 10.5318 5.46368 9.09141 6.33028 7.8946C7.19688 6.69779 8.41998 5.80591 9.82441 5.34667C11.2289 4.88743 12.7426 4.88439 14.1489 5.33799"
        stroke={colorOuter}
        strokeWidth="2"
      />
      <path d="M9 11L12 14L19 7" stroke={colorInner} strokeWidth="2" />
    </g>
  </svg>
);
