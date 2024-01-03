import * as C from './styles'
import { InputTS } from '../../types/Input'
import { useState } from 'react'
import useDebounce from './useDebounce'

const delay = 500

export const Input = ({value, setSearch}: InputTS) => {

    const [input, setInput] =useState('')

    const debouncedChange = useDebounce(setSearch, delay)

    const handleChange = (e: string) => {
        setInput(e)
    }

 
    return (
        <C.InputArea>
            <input 
            type="text"
            placeholder='Search for a country...'
            value={input}
            onChange={e => handleChange(e.target.value)}
            />
            <select onChange={e => handleChange(e.target.value)}>
                <option value="Filter by Region" disabled selected >Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </C.InputArea>
    )
}