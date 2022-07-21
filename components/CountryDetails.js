import useCountries from "../utils/useCountries";
import Link from "next/link";
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import Head from "next/head";

const CountryDetails = ({ countryName }) => {
    const { countriesData } = useCountries();
    const countryInfo = Object.values(countriesData).filter((country) => (country.name.common === countryName || country.cca3 === countryName) );
    return (
        <div className="dark:bg-darkBg pt-12">
            {
                countryInfo.length === 0 ? "" : (
                    <Head>
                        <title>REST COUNTRIES API - {countryInfo[0].name.common} Page</title>
                    </Head> 
                ) 
            }
            <main className="w-[80vw] m-auto mb-8">
                {
                    countryInfo.length === 0 ? <p>Loading...</p> : (
                        <>
                            <Link href='/'>
                                <a className="dark:bg-darkElem rounded-sm shadow-customShadow py-2 px-4 flex items-center justify-center gap-3 w-32 hover:text-gray-500">
                                    <FontAwesomeIcon icon={faArrowLeft}/>
                                    Back
                                </a>
                            </Link>
                            <article className="mt-12 md:flex md:gap-16">
                                <div className="relative w-[70vw] h-40 sm:w-[425px] md:w-[40vw] md:h-[40vh] md:self-center">
                                    <Image src={countryInfo[0].flags.png} layout="fill" alt={countryInfo[0].name.common} priority="low"/>
                                </div>
                                <div>
                                    <h1 className="font-extrabold mt-8 md:text-xl">{countryInfo[0].name.common}</h1>
                                    <div className="mt-4 md:flex gap-8 md:text-xs">
                                        <div className="mb-8 md:mb-2">
                                            <p className="font-extrabold text-sm mb-2">Native Name: <span className="font-light">{Object.values(countryInfo[0].name.nativeName)[ Object.values(countryInfo[0].name.nativeName).length - 1].common}</span></p>
                                            <p className="font-extrabold text-sm mb-2">Population : <span className="font-light">{countryInfo[0].population.toLocaleString("en-US")}</span></p>
                                            <p className="font-extrabold text-sm mb-2">Region: <span className="font-light">{countryInfo[0].region}</span></p>
                                            <p className="font-extrabold text-sm mb-2">Sub Region: <span className="font-light">{countryInfo[0].subregion}</span></p>
                                            <p className="font-extrabold text-sm mb-2">Capitals: <span className="font-light">{countryInfo[0].capital}</span></p>
                                        </div>
                                        <div>
                                            <p className="font-extrabold text-sm mb-2">Top Level Domain: <span className="font-light">{countryInfo[0].tld}</span></p>
                                            <p className="font-extrabold text-sm mb-2">Currencies: <span className="font-light">{Object.values(countryInfo[0].currencies)[0].name}</span></p>
                                            <p className="font-extrabold text-sm mb-2 flex gap-1">Languages: <span className="flex font-light">{Object.values(countryInfo[0].languages).map((language, index) => <span key={language}>{ (index ? ', ' : '') + language}</span>)}</span></p>
                                        </div>
                                    </div>
                                    <div className="mt-8 md:mt-0 md:flex md:items-center md:gap-2">
                                        <h2 className="font-extrabold text-base">Border Countries:</h2>
                                        <div className="flex flex-wrap gap-3 mt-4 md:pb-4">
                                            {
                                                countryInfo[0].borders === undefined ? <p>No border countries </p>: countryInfo[0].borders.map((border, index) => {
                                                    return (
                                                        <Link key={index} href={`/${border}`}>
                                                            <button key={index} type="button" className="shadow-customShadow border-white rounded-sm dark:bg-darkElem py-2 px-4 hover:text-gray-500 hover:scale-105">{border}</button>
                                                        </Link>                                                    
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>   
                            </article>
                        </>
                    )
                }   
            </main>
            <Footer/>
        </div>
    )   
};

export default CountryDetails;