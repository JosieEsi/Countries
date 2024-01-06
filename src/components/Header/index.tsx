import React from 'react';
import { useDarkMode } from '../../DarkModeContext'
import { Toggle } from '../Toggle';
import * as C from './styles';




export const Header = () => {
    const { darkMode } = useDarkMode();
  return (
    <C.Header className={darkMode ? 'dark-mode' : ''}>
      <div className='container'>
        <h1>Where in the World?</h1>
        <Toggle  />
      </div>
    </C.Header>
  );
};


