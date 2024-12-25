import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if the user has a saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      // Set default theme to light
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    // Apply the theme by adding or removing the 'dark' class on the body
    if (isDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="relative w-16 h-8 flex items-center justify-between rounded-full bg-gray-500 dark:bg-gray-600 p-1 transition-all duration-300"
      aria-label="Toggle dark mode"
    >
      <div
        className={`w-6 h-6 bg-black rounded-full transition-transform duration-300 ease-in-out ${
          isDarkMode ? 'transform translate-x-8' : ''
        }`}
      />
    </button>
  );
};

export default ThemeToggle;
