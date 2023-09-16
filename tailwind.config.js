/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
      width: {
        607: "607px",
        340: "340px",
        429: "429px",
        518: "518px",
        272: "272px",
        308: "308px",
        220: "220px",
      },
      height: {
        348: "348px",
        414: "414px",
        183: "183px",
        186: "186px",
        380: "380px",
        446: "446px",
        252: "252px",
        151: "151px",
      },
      backgroundColor: {
        "news-background": "#D952F8",
        "spot-background": "#1E1E1E",
        "crypto-background": "#F7931A",
        "articles-background": "#1E1E1E",
        "discord-background": "#5865F2",
        "reddit-background": "#FF4500",
        "nft-background": "#1E1E1E",
      },
    },
  },
  plugins: [],
};
