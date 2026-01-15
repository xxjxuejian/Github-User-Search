import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import UserCard from "./components/UserCard";

import type { GitHubUser } from "./types/user.ts";
function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [error, setError] = useState(false);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleSearch = async (username: string) => {
    console.log("Searching for:", username);
    try {
      setError(false);
      const res = await fetch(`https://api.github.com/users/${username}`);
      console.log("res", res);
      if (!res.ok) {
        throw new Error("User not found");
      }
      const data: GitHubUser = await res.json();
      console.log("data", data);
      setUserData(data);
    } catch (error) {
      setError(true);
    }
  };
  console.log(11111);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <div className="min-h-screen p-6 flex-center">
        <div className="w-full max-w-[730px]">
          <Header theme={theme} toggleTheme={toggleTheme} />
          <Search onSearch={handleSearch} error={error}></Search>
          {/* <UserCard user={userData} /> */}
          {userData && <UserCard user={userData} />}
        </div>
      </div>
    </>
  );
}

export default App;
