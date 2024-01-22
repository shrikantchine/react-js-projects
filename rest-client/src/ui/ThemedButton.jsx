import React from "react";

const classes = {
  primary:
    "rounded bg-teal-800 px-4 py-2 font-semibold text-white hover:bg-teal-400",
  danger:
    "rounded bg-red-800 px-4 py-2 font-semibold text-white hover:bg-red-400",
};

const ThemedButton = ({
  type = "button",
  children,
  variant = "primary",
  onClick,
}) => {
  return (
    <button type={type} className={`${classes[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default ThemedButton;
