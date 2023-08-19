export const BitmatterLargeIcon = ({
  className,
  scale = 0.18,
  color = "#fff",
  backgroundColor = "#212121",
}: {
  className?: string;
  scale?: number;
  color?: string;
  backgroundColor?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={"0 0 " + 3048.7 * scale + " " + 525.17 * scale}
    width={3048.7 * scale}
    height={525.17 * scale}
    className={" " + className}
  >
    <defs>
      <linearGradient
        id="a"
        y1="276.02"
        x2="543.85"
        y2="276.02"
        gradientTransform="translate(-115.53 273.13) rotate(-45)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#a3d400" />
        <stop offset="0.05" stop-color="#97d307" />
        <stop offset="0.29" stop-color="#62cc25" />
        <stop offset="0.51" stop-color="#38c63d" />
        <stop offset="0.71" stop-color="#19c24e" />
        <stop offset="0.88" stop-color="#07c058" />
        <stop offset="1" stop-color="#00bf5c" />
      </linearGradient>
      <linearGradient
        id="b"
        x1="86.5"
        y1="262.58"
        x2="634.45"
        y2="262.58"
        gradientTransform="translate(-76.76 339.86) rotate(-45)"
        xlinkHref="#a"
      />
    </defs>
    <g transform={`scale(${scale})`}>
      <path
        d="M57,161.41h484.9a0,0,0,0,1,0,0V335.64a55,55,0,0,1-55,55H2a0,0,0,0,1,0,0V216.41a55,55,0,0,1,55-55Z"
        transform="translate(274.82 -111.44) rotate(45)"
        opacity="0.73"
        fill="url(#a)"
      />
      <path
        d="M218.09,67.8H525.65a55,55,0,0,1,55,55V402.37a55,55,0,0,1-55,55H163.09a0,0,0,0,1,0,0V122.8a55,55,0,0,1,55-55Z"
        transform="translate(294.59 -186.04) rotate(45)"
        opacity="0.73"
        fill="url(#b)"
      />
      <path
        d="M976.63,439.07a109.84,109.84,0,0,1-33-5.05,113,113,0,0,1-29.1-13.72,94.61,94.61,0,0,1-21.65-19.48q-8.67-10.83-11.55-21.89l14-6.26-1.44,60.62H836.63v-355h59.18V239.41l-10.59-4.81A51,51,0,0,1,896,212.71,95.35,95.35,0,0,1,917,193.94a115.3,115.3,0,0,1,27.43-13.47,94,94,0,0,1,30.3-5.05q34.15,0,60.38,16.84t41.38,46.67q15.15,29.83,15.15,67.83,0,38.49-14.91,68.32T1035.56,422Q1009.34,439.06,976.63,439.07Zm-12.51-52q20.21,0,36.08-10.34a71.76,71.76,0,0,0,25-28.38q9.13-18,9.14-41.62,0-23.08-8.9-40.89a68.71,68.71,0,0,0-24.78-27.9q-15.87-10.11-36.56-10.11T927.56,238a70.35,70.35,0,0,0-25,27.9q-9.13,17.81-9.14,40.89,0,23.58,9.14,41.62a71.68,71.68,0,0,0,25,28.38Q943.43,387.11,964.12,387.1Z"
        fill="#d0d3d4"
      />
      <path d="M1151.27,434.25V180.72h59.17V434.25Z" fill="#d0d3d4" />
      <path
        d="M1262.88,235.56V180.72h164.54v54.84Zm50,198.69v-318h59.17v318Z"
        fill="#d0d3d4"
      />
      <path
        d="M1471.68,434.25V180.72h58.21l1,51-9.62,3.85a77.65,77.65,0,0,1,13-23.33,89,89,0,0,1,20.69-18.77A110.64,110.64,0,0,1,1580.4,181a84.73,84.73,0,0,1,27.42-4.58q20.68,0,36.81,6.5a63.73,63.73,0,0,1,26.94,20.45q10.83,13.95,16.12,35.6l-9.15-1.93,3.86-7.69a69.3,69.3,0,0,1,14.91-20.93A125.81,125.81,0,0,1,1719,191.54a101.53,101.53,0,0,1,25.26-11.3,93.33,93.33,0,0,1,26.22-3.86q28.86,0,48.11,11.55t28.86,35.12q9.61,23.58,9.62,58.21v153h-59.65V285.11q0-19.23-5.05-31.75t-15.4-18.52q-10.35-6-25.74-6a64.25,64.25,0,0,0-22.85,4.09,53.51,53.51,0,0,0-18.52,11.55,55,55,0,0,0-12,17.08,51,51,0,0,0-4.33,21.17V434.25h-59.65V284.63q0-18.27-5.3-30.55t-15.39-18.76q-10.11-6.49-24.54-6.5a62.28,62.28,0,0,0-22.61,4.09,55.88,55.88,0,0,0-18.28,11.31,52.23,52.23,0,0,0-12,16.84,51,51,0,0,0-4.33,21.17v152Z"
        fill="#d0d3d4"
      />
      <path
        d="M2018.68,439.07a98.81,98.81,0,0,1-56.77-17.32q-25.5-17.33-40.9-47.15t-15.39-67.84q0-38,15.39-67.83t41.86-46.67q26.46-16.83,59.66-16.84a106.17,106.17,0,0,1,35.12,5.54,88,88,0,0,1,27.9,15.63,94.59,94.59,0,0,1,20,23.09,83.61,83.61,0,0,1,10.82,27.91l-13-3.37v-63.5H2163V434.25h-60.14V373.64l14-2.41a74.89,74.89,0,0,1-12.27,25.26,95,95,0,0,1-22.13,21.65,121,121,0,0,1-29.35,15.15A101.18,101.18,0,0,1,2018.68,439.07ZM2035,386.63q20.69,0,36.57-10.11a68.38,68.38,0,0,0,24.78-28.14q8.89-18,8.89-41.62,0-23.08-8.89-40.89A68.78,68.78,0,0,0,2071.6,238q-15.88-10.11-36.57-10.11T1998.71,238a67.61,67.61,0,0,0-24.29,27.9q-8.67,17.81-8.66,40.89,0,23.58,8.66,41.62t24.29,28.14Q2014.34,386.63,2035,386.63Z"
        fill="#d0d3d4"
      />
      <path
        d="M2209.19,235.56V180.72h164.54v54.84Zm50,198.69v-318h59.17v318Z"
        fill="#d0d3d4"
      />
      <path
        d="M2396.33,235.56V180.72h164.54v54.84Zm50,198.69v-318h59.17v318Z"
        fill="#d0d3d4"
      />
      <path
        d="M2722.52,439.07q-39.93,0-70.48-16.85t-47.63-45.94q-17.09-29.1-17.08-66.63,0-29.82,9.62-54.36a130.43,130.43,0,0,1,26.71-42.58,117.23,117.23,0,0,1,40.89-27.9q23.8-9.87,52.2-9.87a113.65,113.65,0,0,1,46.66,9.62,117.4,117.4,0,0,1,37.53,26.22,112.9,112.9,0,0,1,24.3,39.45q8.4,22.86,7.93,49.8l-.48,20.69H2627.26L2616.2,280.3h166.94l-7.7,8.18V277.9a52.57,52.57,0,0,0-9.62-26.23,57.9,57.9,0,0,0-20.93-17.79,61.09,61.09,0,0,0-28.14-6.5q-23.58,0-39.7,9.14a58.41,58.41,0,0,0-24.29,26.22q-8.19,17.08-8.18,42.58,0,24.54,10.34,42.82a70,70,0,0,0,29.35,28.14q19,9.87,44.51,9.86a89.9,89.9,0,0,0,32.71-5.77q14.91-5.78,32.23-20.68l29.35,40.89A129.23,129.23,0,0,1,2793.48,421a175.24,175.24,0,0,1-34.88,13.22A141.3,141.3,0,0,1,2722.52,439.07Z"
        fill="#d0d3d4"
      />
      <path
        d="M2885.61,434.25V180.72h58.21l1,80.82-8.18-18.28a90.15,90.15,0,0,1,18.28-34.64,99.1,99.1,0,0,1,30.07-24.3,76.54,76.54,0,0,1,35.84-8.9,81.47,81.47,0,0,1,15.63,1.45,67.87,67.87,0,0,1,12.27,3.37l-15.87,64.94a55.91,55.91,0,0,0-13-4.81,63.44,63.44,0,0,0-15.4-1.92,58.09,58.09,0,0,0-22.85,4.57,59.15,59.15,0,0,0-31.75,31.75,61.88,61.88,0,0,0-4.57,24.3V434.25Z"
        fill="#d0d3d4"
      />
      <rect
        x="1047.02"
        y="74.64"
        width="72.6"
        height="71.95"
        transform="translate(1193.94 -972.7) rotate(90)"
        fill="#d0d3d4"
      />
    </g>
  </svg>
);
