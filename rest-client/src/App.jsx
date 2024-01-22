import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Request from "./components/request/Request";
import Response from "./components/response/Response";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = (val) => {
    setTheme(val);
  };

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <div className="max-w-screen">
        <Navbar />
        <div className="flex justify-between">
          <div className="h-screen w-72 flex-shrink-0 border border-white bg-teal-800">
            Sidebar
          </div>
          <div className="mt-0 h-screen flex-grow bg-white pt-4 dark:bg-gray-900">
            <Request />
            <Response />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
