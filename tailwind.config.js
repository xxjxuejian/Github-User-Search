/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // 定义设计稿中的颜色
        "lm-bg": "#F6F8FF", // 浅色模式页面背景色
        "lm-bg-content": "#FEFEFE", // 浅色模式内容/卡片背景色
        "lm-text": "#4B6A9B", // 浅色模式文字色
        "lm-text-alt": "#2B3442", // 浅色模式标题文字色
        "dm-bg": "#141D2F", // 深色模式页面背景色
        "dm-bg-content": "#1E2A47", // 深色模式内容/卡片背景色
        "dm-text": "#FFFFFF", // 深色模式文字色
        primary: "#0079FF", // 强调色
      },
      fontFamily: {
        mono: ["Space Mono", "monospace"], // 推荐使用 Google Fonts: Space Mono
      },
    },
  },
  plugins: [],
};
