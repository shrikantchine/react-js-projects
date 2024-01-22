import React from "react";

const ThemedInput = ({ type, placeholder, value, onChange, name }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="flex-grow rounded-lg border border-gray-500 bg-white px-2 py-2 dark:bg-gray-700 dark:text-white dark:hover:border-teal-950"
      value={value}
      onChange={onChange}
    />
  );
};

export default ThemedInput;
