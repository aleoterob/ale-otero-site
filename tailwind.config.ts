import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "1140": "1140px",
      },
      width: {
        "1490": "1490px",
      },
      margin: {
        "235": "235",
        "75": "75",
      },
      height: {
        "375": "375px",
        "500": "500px",
        "700": "700px",
        "800": "800px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        greyVercel: "#858585",
        rojoMucho: "#DC524A",
        verdeAle: "#47cca5",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
