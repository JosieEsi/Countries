import * as C from './styles'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { CountryTS } from '../../types/Country'
import { SingleCountry } from '../../components/SingleCountry'
import { api } from '../../api'
import { useDarkMode } from '../../DarkModeContext'
import { ReactComponent as ArrowBack } from '../CountryPage/arrowBack.svg'


export const CountryPage = () => {
    const {name, code} = useParams()

    const [loading, setLoading] = useState (false)
    const [country, setCountry] = useState<CountryTS[]>([])

    const { darkMode } = useDarkMode()

    useEffect(()=>{
        if(name){
            getCountry(name)
        } else if (code) {
            getCountry(code)
        }
    },[name, code])

    const getCountry = async (param: string) => {
        setLoading(true)
        let country = name ? await api.getCountry(param) : await api.getCountryByCode(param)
        setCountry(country)
        setLoading(false)
    }

    return(
        <C.CountryPage className={darkMode ? 'dark-mode' : ''}>
            <div className={`container {darkMode ? 'dark-mode' : ''}`}>
                <div className='back-container'>
                < ArrowBack className={`arrow {darkMode ? 'dark-mode' : ''}`} style={{ fill: darkMode ? '#FFF' : '#000' }}/><path opacity="1" fill="#000"  stroke="#000" stroke-width="0.001" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                <Link to="/" className={`back--button {darkMode ? 'dark-mode' : ''}`}>Back</Link>
                </div>
                {loading &&
                    <div className={`loading {darkMode ? 'dark-mode' : ''}`}>Loading...</div>
                }
                {!loading &&
                    country.map((item) => (
                        <SingleCountry 
                          flag= {item.flags.png}
                          name={item.name}
                          nativeName={item.nativeName}
                          population={item.population}
                          region={item.region}
                          subregion={item.subregion}
                          capital={item.capital}
                          topLevelDomain={item.topLevelDomain[0]}
                          currencie={item.currencies && item.currencies}
                          languages={item.languages}
                          borders={item.borders}

                        />
                    ))
                }
            </div>
        </C.CountryPage>
    )
}