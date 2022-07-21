import Image from "next/image"
import Head from "next/head"
import { useState } from "react"
import Link from "next/link"

const Countries = ({ countriesData, selectValue, search }) => {
    const myLoader = ({ src, width, quality }) =>{
        return `${src}?w=${width}&q=${quality || 75}`
    }

    const filterfunc = () => {
        if(selectValue === '') {
            return countriesData;
        }

        return countriesData.filter((country) => country.region === selectValue)
    }

    const searchfunc = () => {
      return Object.values(filterfunc()).filter((country) => {
        if(search === ''){
            return filterfunc();
        } else {
            return country.name.common.toLowerCase().includes(search.toLowerCase());
        }
      })
    }

    const [currentPage, setCurrentPage] = useState(1);
    const [countryPerpage] = useState(20);

    const indexOfLastCountry = currentPage * countryPerpage;
    const indexOfFirstCountry = indexOfLastCountry - countryPerpage;
    const currentData = searchfunc().slice(indexOfFirstCountry, indexOfLastCountry);

    const handlePagination = (page) => {
        let p = page >=1 ? page : 1;
        if(p >= Math.ceil(countriesData.length / countryPerpage)) return Math.ceil(countriesData.length / countryPerpage);
        setCurrentPage(p);
    }

    return (
        <section className="mt-8 w-[88vw] m-auto">
            <div className="w-72 mb-4 text-lg font-semibold">
                <button className="mr-4 border-2 dark:border-white px-4 py-2 rounded-md hover:cursor-pointer hover:text-gray-500" type="button" onClick={() => handlePagination(currentPage - 1)}>
                    ← Prev
                </button>
                <span className="mr-4">{currentPage}</span>
                <button className="border-2 dark:border-white px-4 py-2 rounded-md hover:cursor-pointer hover:text-gray-500" type="button" onClick={() => handlePagination(currentPage + 1)}>
                    Next →
                </button>
            </div>

          <div className="sm:flex sm:flex-wrap sm:gap-3">
            {
               countriesData.length === 0 ? <p className="font-extrabold text-xl m-auto">Loading...</p> : countriesData && currentData.map((country, index) => {
                    return (
                        <Link key={index} href={`/${country.name.common}`}>
                        <article key={index} className="w-[80vw] m-auto shadow-customShadow mb-8 rounded-md hover:cursor-pointer hover:scale-110 dark:bg-darkElem sm:w-64">
                            <div className="w-[100%] h-40 relative">
                                <Image loader={myLoader} src={country.flags.png} alt="Country's Flag" layout="fill" className="w-[100%]" priority/>
                            </div>
                            <div className="mt-4 ml-6 pb-10">
                                <h1 className="font-extrabold text-lg mb-4">{country.name.common}</h1>
                                <p className="font-light mb-1"><span className="font-semibold">Population: </span>{country.population.toLocaleString("en-US")}</p>
                                <p className="font-light mb-1"><span className="font-semibold">Region: </span>{country.region}</p>
                                <p className="font-light mb-1"><span className="font-semibold">Capital: </span>{country.capital}</p>
                            </div>
                        </article>
                        </Link>
                    )
                })
            }
          </div>
        </section>
    )
}

export default Countries;