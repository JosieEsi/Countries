import React from 'react';
import * as C from './styles';
import { useDarkMode } from '../../DarkModeContext';
import { ReactComponent as SolidMoon } from './solidMoon.svg';
import { ReactComponent as RegularMoon } from './regularMoon.svg';

  
  export const Toggle = () => {
    
    const { darkMode, toggleDarkMode } = useDarkMode();
  
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
