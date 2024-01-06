import * as C from './styles'
import { InputTS } from '../../types/Input'
import { useState } from 'react'
import useDebounce from './useDebounce'
import { ReactComponent as SearchOutline } from './searchOutline.svg'
import { useDarkMode } from '../../DarkModeContext'


const delay = 500



export const Input= ({value, setSearch}: InputTS) => {

    const [input, setInput] =useState('')

    const { darkMode } = useDarkMode();

    const debouncedChange = useDebounce(setSearch, delay)

    const handleChange = (e: string) => {
        setInput(e)
        debouncedChange(e)
    }

   
    return (
        <C.InputArea className={darkMode ? 'dark-mode' : ''}>
            
            <div className='input-block'>
            < SearchOutline className='search'/>
            <input 
            type="text"
            placeholder='Search for a country...'
            value={input}
            onChange={e => handleChange(e.target.value)}
            className={darkMode ? 'dark-mode' : ''}
            />
            </div>
            <select onChange={e => handleChange(e.target.value)} className={darkMode ? 'dark-mode' : ''}>
                <option value="Filter by Region"  disabled selected >Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
            
        </C.InputArea>
    )
}



   