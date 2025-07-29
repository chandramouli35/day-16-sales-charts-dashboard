import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 bg-gray-200 dark:bg-gray-600 rounded"
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default ThemeToggle;
