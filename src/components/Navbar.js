import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
<div className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 py-4 border-b border-gray-200 dark:border-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
      <h1 className="text-5xl font-bold text-blue-600">TopStay</h1>
        <div className="flex gap-4 items-center">
          <Link to="/login" className="text-base font-medium text-gray-700 dark:text-gray-300 hover:underline">Login</Link>
          <Link to="/signup" className="text-base font-medium text-white bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded">Sign up</Link>
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="ml-3 px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
