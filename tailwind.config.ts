import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#27CB8B",
        secondary : "#F9F9F9",
        tertiary : "#F0F0F0",
      },
      backgroundColor : {
        sections : "#f1f5f9",
      }
    },
    container :{
      center : true,
      padding : "2rem",
      
    },
  },
  plugins: [],
};
export default config;
