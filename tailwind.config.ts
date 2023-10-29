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
        "body-dark": "linear-gradient(90deg, rgb(0, 2, 18), rgb(0, 2, 18))",
        "page-primary":
          "radial-gradient(ellipse 80% 50% at 50% -10%, #A6A08F, transparent)",
        "page-primary-v2":
          "radial-gradient(ellipse 80% 50% at 60% -30%, #A6A08F, transparent)",
        "heading-primary": "linear-gradient(92.88deg, #6b544c, #4a332c)",
        "heading-primary-v2":
          "linear-gradient(92.88deg, #ebc088 9.16%, #e0b47b 84.72%)",
        "heading-secondary": "linear-gradient(92.88deg, #000000, #000000)",
        "heading-tertiery":
          "linear-gradient(92.88deg, rgb(0, 0, 0) 9.16%, rgba(0, 0, 0, 0.8) 84.72%)",
        "heading-contact": "linear-gradient(92.88deg, #ffffff, #ffffff)",
        "card-primary": "linear-gradient(92.88deg, #6b544c, #4a332c)",
        "card-primary-v2": "linear-gradient(92.88deg, #736049, #786a5b)",
        "card-secondary":
          "linear-gradient(92.88deg, #BF9969 9.16%, #e0b47b 84.72%)",
        "card-tertiery":
          "linear-gradient(92.88deg, rgb(0, 0, 0) 9.16%, rgba(0, 0, 0, 0.8) 84.72%)",
        "card-pricing": "linear-gradient(92.88deg, #736049, #786a5b)",
        "slider-fade-right":
          "linear-gradient(to right, white 0%,rgba(255, 255, 255, 0) 100%)",
        "slider-fade-left":
          "linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%)",
        "page-contact":
          "radial-gradient(ellipse 80% 50% at 60% -30%, #A6A08F, transparent)",
        "contact-image": "url('/dubai-skyline.png')",
        "contact-bottom":
          "linear-gradient(transparent 0%, black 100%)",
      },
      fontSize: {
        "hero-heading": ["5rem", "1"],
        "hero-sub-heading": ["1.5rem", "1"],
      },
      colors: {
        transparent: "transparent",
        background: "white",
        // background: "#b09f89",
        "black-a08": "rgba(0, 0, 0, 0.08)",
        "white-a08": "rgba(255, 255, 255, 0.08)",
        primary: "rgb(0, 0, 0)",
        "primary-dark": "rgb(255, 255, 255)",
        "secondary-dark": "rgb(180, 188, 208)",
        "button-text-hover": "rgb(241 245 249/1)",
        "button-primary": "#BF9969",
        "button-primary-hover": "#b5946b",
        "toggle-node": "#BF9969",
        "toggle-on": "#736049",
        "toggle-off": "#736049",
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
        "button-dark": "rgba(25, 118, 210, 0.5) 0px 1px 40px",
      },
      animation: {
        ["infinite-slider"]: "infiniteSliderLg 16s linear infinite",
        ["infinite-slider-md"]: "infiniteSliderMd 16s linear infinite",
        ["infinite-slider-sm"]: "infiniteSliderSm 16s linear infinite",
      },
      keyframes: {
        infiniteSliderLg: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(-114rem)",
          },
        },
        infiniteSliderMd: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(-76.2rem)",
          },
        },
        infiniteSliderSm: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(-55rem)",
          },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
