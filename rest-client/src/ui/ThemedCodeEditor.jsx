import React from "react";
import useTheme from "../context/ThemeContext";
import ReactCodeMirror from "@uiw/react-codemirror";
import { duotoneLight, duotoneDark } from "@uiw/codemirror-theme-duotone";

const ThemedCodeEditor = ({ onChange, readOnly }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ReactCodeMirror
      inputMode="json"
      maxHeight="200px"
      minHeight="200px"
      name="body"
      onChange={onChange}
      theme={theme === "dark" ? duotoneDark : duotoneLight}
      readOnly={readOnly}
    />
  );
};

export default ThemedCodeEditor;
