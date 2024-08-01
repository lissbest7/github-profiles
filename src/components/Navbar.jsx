import React, { useState, useEffect } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="border-b-2 dark:border-black bg-white dark:bg-gray-800 p-4 text-white">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FaGithub className="text-black dark:text-white" size={36}/>
          <h1 className="text-2xl font-bold text-black dark:text-white">
            Github <span className="text-slate-500">Profiles</span>
          </h1>
        </div>
        <button
          onClick={toggleDarkMode}
          className="flex items-center justify-center gap-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white p-2 rounded"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
          {isDarkMode ? <IoSunnyOutline /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
