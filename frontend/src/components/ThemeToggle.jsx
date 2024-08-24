import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode === 'true'; // Directly compare the string instead of parsing it
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('theme', isDarkMode.toString()); // Save the boolean as a string
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <button onClick={toggleTheme} className="text-xl md:text-2xl p-1 md:p-2 focus:outline-none">
      <i className={`fas ${isDarkMode ? 'fa-sun sun-icon' : 'fa-moon moon-icon'}`}></i>
    </button>
  );
};

export default ThemeToggle;
