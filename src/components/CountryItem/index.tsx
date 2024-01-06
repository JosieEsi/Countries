import * as C from './styles'
import { CountryItemTS } from '../../types/CountryItem'
import { Link } from 'react-router-dom'
import { useDarkMode } from '../../DarkModeContext'

export const CountryItem = ({name, population, region, capital, flag}: CountryItemTS) => {
    const { darkMode } = useDarkMode();
    return (
        <C.CountryItem className={darkMode ? 'dark-mode' : ''}>
            <Link to={`/country/${name}`}>
                <div className='img--area'>
                    <img src={flag} alt={`Flag of country: ${name}`}/>
                </div>
                <div className={`data--area {darkMode ? 'dark-mode' : ''}`}>
                    <p className='country--name'>{name}</p>
                    <p>Population: <span>{population}</span></p>
                    <p>Region: <span>{region}</span></p>
                    <p>Capital: <span>{capital}</span></p>
                </div>
            </Link>
        </C.CountryItem>
    )
}