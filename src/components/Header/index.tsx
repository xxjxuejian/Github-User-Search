import React from "react";
import { SvgIcon } from "../SvgIcon";

interface HeaderProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}
const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  return (
    <header className="mb-6 flex-between">
      <h1 className="text-2xl font-bold text-lm-text-alt dark:text-white">
        devfinder
      </h1>
      <button
        onClick={toggleTheme}
        className="flex items-center gap-4 text-xs tracking-[2.5px] font-bold text-lm-text hover:text-[#222] dark:text-white dark:hover:text-[#90A4D4] transition-colors"
      >
        {theme === "light" ? "DARK" : "LIGHT"}
        {theme === "light" ? (
          <SvgIcon name="moon" size={20} />
        ) : (
          <SvgIcon name="sun" size={20} />
        )}
      </button>
    </header>
  );
};

export default Header;
