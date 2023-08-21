import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary":
          "linear-gradient(90deg, rgb(103, 58, 183), rgb(121, 134, 203))",
        "hero-heading":
          "linear-gradient(92.88deg, rgb(25, 118, 210) 9.16%, rgb(86, 67, 204) 63.89%, rgb(103, 63, 215) 64.72%)",
        "hero-heading-dark":
          "linear-gradient(92.88deg, rgb(25, 118, 210) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)",
        "hero-heading-v2":
          "linear-gradient(92.88deg, rgb(0, 0, 0) 9.16%, rgba(0, 0, 0, 0.8) 84.72%)",
        "gradient-button-primary":
          "linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)",
        "gradient-button-v2":
          "linear-gradient(92.88deg, rgb(30, 136, 229) 20.89%, rgb(25, 118, 210) 80%)",
        body: "linear-gradient(90deg, rgb(255, 255, 255)) rgb(255, 255, 255)",
        "body-dark": "linear-gradient(90deg, rgb(0, 2, 18), rgb(0, 2, 18))",
        "page-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -10%,rgba(25, 118, 210, 0.3), transparent)",
        "page-gradient-dark":
          "radial-gradient(ellipse 80% 50% at 50% -25%,rgba(25, 118, 210, 1), rgb(0, 0, 0))",
        "slider-fade-right":
          "linear-gradient(to right,white 0%,rgba(255, 255, 255, 0) 100%)",
        "slider-fade-left":
          "linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%)",
      },
      fontSize: {
        "hero-heading": ["5rem", "1"],
        "hero-sub-heading": ["1.5rem", "1"],
      },
      colors: {
        transparent: "transparent",
        background: "rgb(0, 2, 18)",
        "black-a08": "rgba(0, 0, 0, 0.08)",
        "white-a08": "rgba(255, 255, 255, 0.08)",
        primary: "rgb(0, 0, 0)",
        "primary-dark": "rgb(255, 255, 255)",
        secondary: "rgb(0, 0, 0);",
        "secondary-dark": "rgb(180, 188, 208)",
        logo: "rgb(103, 63, 215)",
        "logo-dark": "rgb(255, 255, 255)",
      },
      spacing: {
        0: "0",
        1: "0.4rem",
        2: "0.8rem",
        3: "1.2rem",
        4: "1.6rem",
        5: "2.4rem",
        6: "3.2rem",
        7: "4rem",
        8: "4.8rem",
        "navigation-height": "var(--navigation-height)",
      },
      boxShadow: {
        button: "rgba(25, 118, 210, 0.5) 0px 1px 40px",
        "button-dark": "rgba(25, 118, 210, 0.5) 0px 1px 40px",
      },
      animation: {
        ["infinite-slider"]: "infiniteSlider 16s linear infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(-114rem)",
          },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
