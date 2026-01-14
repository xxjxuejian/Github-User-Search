/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // 定义设计稿中的颜色
        "lm-bg": "#F6F8FF",
        "lm-bg-content": "#FEFEFE",
        "lm-text": "#4B6A9B",
        "lm-text-alt": "#2B3442",
        "dm-bg": "#141D2F",
        "dm-bg-content": "#1E2A47",
        "dm-text": "#FFFFFF",
        primary: "#0079FF",
      },
      fontFamily: {
        mono: ["Space Mono", "monospace"], // 推荐使用 Google Fonts: Space Mono
      },
    },
  },
  plugins: [],
};
