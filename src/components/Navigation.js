"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();

  // Load theme preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
      document.body.classList.remove("invert", "hue-rotate-180");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
      document.body.classList.add("invert", "hue-rotate-180");
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      document.body.classList.add("invert", "hue-rotate-180");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      document.body.classList.remove("invert", "hue-rotate-180");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <nav className="w-full bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mr-8"
            >
              WHE Playtime Demo App
            </Link>
          </div>
          <div className="flex space-x-8 items-center">
            <Link
              href="/"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-colors ${
                pathname === "/" 
                  ? "border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400" 
                  : "border-transparent text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-600"
              }`}
            >
              Home
            </Link>
            <Link
              href="/todos"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-colors ${
                pathname === "/todos" 
                  ? "border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400" 
                  : "border-transparent text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-600"
              }`}
            >
              Todos
            </Link>
            <Link
              href="/contact"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-colors ${
                pathname === "/contact" 
                  ? "border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400" 
                  : "border-transparent text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-600"
              }`}
            >
              Contact
            </Link>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg
                  className="w-5 h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-zinc-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
