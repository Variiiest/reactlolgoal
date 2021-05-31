import React from "react";
import { ThemeContext } from "./themeContext";
const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  return (
    <div className="transition duration-500 ease-in-out">
      {theme === "dark" ? (
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-gray-500 dark:text-gray-400 btn-primary cursor-pointer"> 
     Light</button>
      ) : (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="text-gray-500 dark:text-gray-400 btn-primary cursor-pointer"> 
        Dark</button>
      )}
    </div>
  );
};
export default Toggle;