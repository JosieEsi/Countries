import * as C from './styles'
import { useEffect, useState } from 'react'
import { Input } from '../../components/Input'
import { CountriesTS } from '../../types/Countries'
import { CountryItem } from '../../components/CountryItem'
import { api } from '../../api'
import { useDarkMode } from '../../DarkModeContext'


export const Countries = () => {
    const [countries, setCountries] = useState<CountriesTS[]>([])
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)
    const { darkMode } = useDarkMode()

    useEffect(()=>{
        getAllCountries()
    },[])

    const getAllCountries = async () => {
        setLoading(true)
        let countries = await api.getCountries()
        setCountries(countries)
        console.log(countries)
        setLoading(false)
    }

    const lowerSearch = search.toLowerCase()

    const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(lowerSearch) || country.region.toLowerCase().includes(lowerSearch)
    )

   
       
    return (
        <C.CountriesArea className={darkMode ? 'dark-mode' : ''}>
            <Input
                value={search}
                setSearch={setSearch}
            />
            <div className={`countries {darkMode ? 'dark-mode' : ''}`}>
                {loading &&
                    <div className={`load {darkMode ? 'dark-mode' : ''}`}>Loading...</div>
                }
                {!loading &&
                    filteredCountries.map
                    ((item) => (
                        <CountryItem
                            name={item.name}
                            population={item.population}
                            region={item.region}
                            capital={item.capital}
                            flag={item.flags.png}
                                                    />
                    ))
                }
            </div>
        </C.CountriesArea>
    )
}