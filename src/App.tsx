import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import UserCard from "./components/UserCard";

import type { GitHubUser } from "./types/user.ts";
function App() {
  // const [theme, setTheme] = useState<"light" | "dark">("light");
  // 根据系统偏好自动设置初始主题。
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
    return "light";
  });
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  // 搜索不到用户是显示错误信息
  const [error, setError] = useState(false);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // 根据用户名获取GitHub用户数据
  const fetchUser = async (username: string) => {
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) {
        throw new Error("User not found");
      }
      const data: GitHubUser = await res.json();
      setUserData(data);
      setError(false);
    } catch (error) {
      setError(true);
      setUserData(null);
    }
  };

  // 应用主题变化到document元素
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  //  初始加载时获取一个默认用户的数据
  useEffect(() => {
    fetchUser("xxjxuejian");
  }, []);

  return (
    <>
      <div className="min-h-screen p-6 flex-center">
        <div className="w-full max-w-[730px]">
          <Header theme={theme} toggleTheme={toggleTheme} />
          <Search onSearch={fetchUser} error={error}></Search>
          {userData && <UserCard user={userData} />}
        </div>
      </div>
    </>
  );
}

export default App;
