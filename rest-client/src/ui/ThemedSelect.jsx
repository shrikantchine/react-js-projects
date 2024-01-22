import React from "react";

const ThemedSelect = ({ children, onChange }) => {
  return (
    <select
      className="block rounded-lg border border-gray-500
     bg-white px-4 py-2 font-medium focus:border-teal-400 dark:bg-gray-700 dark:text-white"
      onChange={onChange}
    >
      {children}
    </select>
  );
};

export default ThemedSelect;
