import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";

import type { GitHubUser } from "./types/user.ts";
function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [error, setError] = useState(false);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleSearch = async (username: string) => {
    console.log("Searching for:", username);
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      console.log("res", res);
      if (!res.ok) {
        throw new Error("User not found");
      }
      const data: GitHubUser = await res.json();
      console.log("data", data);
      // setError(false);
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
        <div className="w-full max-w-[730px] h-[730px] ">
          <Header theme={theme} toggleTheme={toggleTheme} />
          <Search onSearch={handleSearch} error={error}></Search>
        </div>
      </div>
    </>
  );
}

export default App;
