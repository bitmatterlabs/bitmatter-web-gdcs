export const MessengerIcon = ({
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
        d="M12,2A9.65,9.65,0,0,0,2,11.7a9.51,9.51,0,0,0,3.14,7.18.81.81,0,0,1,.27.56l0,1.78a.81.81,0,0,0,1.13.71l2-.87a.75.75,0,0,1,.53,0,11,11,0,0,0,2.9.38A9.7,9.7,0,1,0,12,2Zm6,7.46-2.93,4.66a1.5,1.5,0,0,1-2.17.4l-2.34-1.75a.6.6,0,0,0-.72,0l-3.16,2.4A.47.47,0,0,1,6,14.54L8.93,9.88a1.5,1.5,0,0,1,2.17-.4l2.34,1.75a.6.6,0,0,0,.72,0l3.16-2.4A.47.47,0,0,1,18,9.46Z"
      ></path>
    </g>
  </svg>
);
