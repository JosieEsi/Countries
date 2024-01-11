import * as C from "./styles"
import { SingleCountryTS } from "../../types/SingleCountry"
import { Link } from "react-router-dom"
import { useDarkMode } from '../../DarkModeContext'

export const SingleCountry = ({
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencie,
    languages,
    borders,
    flag
}: SingleCountryTS) => {
    const { darkMode } = useDarkMode();
   
    return (
        <C.CountryData className={darkMode ? 'dark-mode' : ''}>
            <img src={flag} alt={`Flag of country: ${name} `}/>
            <div className={`data--area {darkMode ? 'dark-mode' : ''}`}>
                <h1>{name}</h1>
                <div className="area">
                <div className='data--firstArea'>
                    <p><span>Native Name: </span>{nativeName}</p>
                    <p><span>Population: </span>{population}</p>
                    <p><span>Region: </span>{region}</p>
                    <p><span>Subregion: </span>{subregion}</p>
                    {capital &&
                        <p><span>Capital: </span>{capital}</p>
                    }
                    </div>
                    <div className='data--secondArea'>
                    <p className="topLevel"><span>Top Level Domain</span>{topLevelDomain}</p>
                    {currencie &&
                    <p><span>Currencies: </span>{currencie.map(item => item.name)}</p>
                    }
                    <p><span>Languages: </span>{
                    languages.map((item, index) => (
                        <span key={index} className='language'>{item.name}</span>
                    ))}
                    </p>
                    </div>
                    </div>
                    {borders &&
                    <div className={`border-area {darkMode ? 'dark-mode' : ''}`}>
                        <p>Border Countries: </p>
                        <div className={`borders {darkMode ? 'dark-mode' : ''}`}>
                            {borders.map((item, index) => <Link to={`/code/${item}`} key={index}>{item}</Link>)} 
                        </div>
                    </div>
                }
            </div>
           
        </C.CountryData>
    )
}