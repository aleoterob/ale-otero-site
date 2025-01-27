import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "1490": "1490px",
      },
      maxWidth: {
        "1140": "1140px",
        "1490": "1490px",
      },
      width: {
        "500": "500",
        "700": "700",
        "1490": "1490px",
        "90%": "90%",
      },
      margin: {
        "235": "235",
        "75": "75",
      },
      height: {
        "375": "375px",
        "500": "500px",
        "600": "600px",
        "700": "700px",
        "800": "800px",
        "1000": "1000px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        greyVercel: "#858585",
        rojoMucho: "#DC524A",
        verdeAle: "#47cca5",
        negroPuro: "#000000",
        negroSlideMenu: "#1e1e1e",
        grisHover: "#848484",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        base: "16px", // Tamaño base en la raíz
      },
    },
  },
  plugins: [],
} satisfies Config;
