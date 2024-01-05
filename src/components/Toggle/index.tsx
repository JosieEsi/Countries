import * as C from './styles';
import { useState } from 'react';
import { ReactComponent as SolidMoon } from './solidMoon.svg';
import { ReactComponent as RegularMoon } from './regularMoon.svg';

interface ToggleProps {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
  }

  export const Toggle: React.FC<ToggleProps> = ({ darkMode, setDarkMode }) => {
    const toggleDarkMode = () => {
      document.body.classList.toggle("dark-mode");
      setDarkMode(!darkMode);
    };
  
  return (
    <C.Toggle>
      <div className="toggle" onClick={toggleDarkMode}>
        {darkMode ? (
          <div className="toggle-light">
            <RegularMoon />
            <p>Light Mode</p>
        </div>
        ) : (
          <div className="toggle-dark">
            <SolidMoon />
            <p>Dark Mode</p>
          </div>
        )}
      </div>
    </C.Toggle>
  );
};
