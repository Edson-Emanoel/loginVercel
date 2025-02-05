import React from 'react';

type ThemeOptionProps = {
    theme: string;
};

export const ThemeOption: React.FC<ThemeOptionProps> = ({ theme }) => {
    const setTheme = () => {
      const body = document.querySelector('body');

      if (body) {
            body.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
      }
    };

    return (
        <div
            onClick={setTheme}
            className="theme-option"
            id={`theme-${theme}`}
        ></div>
    );
};