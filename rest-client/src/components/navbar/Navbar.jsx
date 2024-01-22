import React, { useEffect } from "react";
import { TiPointOfInterestOutline } from "react-icons/ti";
import { DiYii } from "react-icons/di";
import useTheme from "../../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(theme);
  }, [theme]);

  const handleToggleTheme = (event) => {
    if (event.target.checked) {
      toggleTheme("dark");
    } else {
      toggleTheme("light");
    }
  };

  return (
    <nav className="border-gray-200 bg-teal-800 p-4 dark:bg-teal-950">
      <div className="flex flex-wrap justify-between">
        <div className="flex flex-wrap">
          <DiYii size={40} className="text-white" />
          <span className="ml-3 pt-3 text-xl font-semibold text-white">
            REST CLIENT
          </span>
        </div>
        <div>
          {/* <input
            type="checkbox"
            className="mt-4"
            value=""
            onChange={handleToggleTheme}
          />
          <span className="ml-2 text-white">Toggle theme</span> */}

          <label className="relative me-5 mt-2 inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              value=""
              className="peer sr-only"
              onChange={handleToggleTheme}
            />
            <div className="peer h-6 w-11 rounded-full border bg-teal-800 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-teal-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-teal-300 dark:border-gray-600 dark:bg-teal-950 dark:peer-focus:ring-teal-800 rtl:peer-checked:after:-translate-x-full"></div>
            <span className="ms-3 text-sm font-medium text-white dark:text-gray-300">
              Dark Mode
            </span>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
