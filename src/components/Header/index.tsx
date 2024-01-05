import { Toggle } from '../Toggle'
import * as C from './styles'
import { useState } from "react";

export const Header: React.FC = ( ) => {
    const [darkMode, setDarkMode] = useState(false);
   
    return (
      <C.Header className={darkMode ? "dark-mode" : ""}>
        <div className='container'>
            <h1>Where in the World?</h1>
            <Toggle setDarkMode={setDarkMode} darkMode={darkMode}/>
        </div>
      </C.Header>

    )
}

