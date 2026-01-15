import React, { useState } from "react";
import { SvgIcon } from "../SvgIcon";
interface SearchProps {
  onSearch: (username: string) => void;
  error: boolean;
}
const Search: React.FC<SearchProps> = ({ onSearch, error }) => {
  const [input, setInput] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full mb-6 ">
      <div
        className="flex-between w-full p-2 rounded-[15px] bg-lm-bg-content dark:bg-dm-bg-content shadow-lg transition-colors
      focus-within:border-primary border border-transparent
      "
      >
        {/* 图标 */}
        <div className="pl-4 text-primary md:pl-8">
          <SvgIcon name="search" size={24} />
        </div>
        {/* 输入框 */}
        <input
          type="text"
          placeholder="Search GitHub username..."
          className="flex-1 min-w-0 ml-2 bg-transparent outline-none md:ml-4 text-lm-text-alt dark:text-white placeholder:text-lm-text text-[13px] md:text-lg cursor-pointer"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {/* 错误信息 */}
        {error && (
          <span className="absolute right-[110px] text-[#F74646] font-bold text-[15px] hidden md:block">
            No results
          </span>
        )}
        {/* 按钮 */}
        <button
          type="submit"
          className="bg-primary hidden md:block hover:bg-[#60ABFF] text-white font-bold py-3 px-4 md:py-3 md:px-6 rounded-xl transition-colors text-[14px] md:text-[16px]"
        >
          Search
        </button>
      </div>
      <div className="mt-4 flex-center md:hidden">
        <button
          type="submit"
          className="bg-primary hover:bg-[#60ABFF] text-white font-bold py-3 px-4 md:py-3 md:px-6 rounded-xl transition-colors text-[14px] md:text-[16px]"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
