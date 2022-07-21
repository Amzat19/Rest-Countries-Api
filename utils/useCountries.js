import axios from "axios";
import { useEffect, useState } from "react";

const useCountries = () => {
    const [ countriesData, setCountriesData] = useState('');

    const url = 'https://restcountries.com/v3.1/all';
  
    useEffect(() => {
      getAllCountriesData();
    }, []);
  
    const getAllCountriesData = () => {
      axios.get(url)
      .then((res) => {
        const allCountries = res.data;
        setCountriesData(allCountries);
      })
      .catch(error => console.error(`Error: ${error}`))
    };

    return {countriesData};
}

export default useCountries;