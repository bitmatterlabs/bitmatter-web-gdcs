export const HambergerIcon = ({ className }: { className?: string }) => (
  <svg
    width="18"
    height="11"
    viewBox="0 0 18 11"
    fill="currentColor"
    className={"" + (className || "")}
    aria-label="hamberger menu icon"
  >
    <path d="M0 0H18V1H0V0Z"></path>
    <path d="M0 10H18V11H0V10Z"></path>
  </svg>
);
