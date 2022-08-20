import Head from 'next/head';
import { useState } from 'react';
import Countries from '../components/Countries';
import Footer from '../components/Footer';
import SearchAndFilter from '../components/SearchAndFilter';
import useCountries from '../utils/useCountries';

export default function Home() {
  const { countriesData } = useCountries();
  const [selectValue, setSelectValue] = useState('');
  const [search, setSearch] = useState('');

  const handleSelectValue = (e) => {
    const { value } = e.target;
    setSelectValue(value);
  };

  const handleSearchValue = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex flex-col min-h-[473px]">
      <Head>
        <title>REST Countries API</title>
        <meta
          name="description"
          content="A list of countries and some of thier specific data"
        />
        <meta name="robots" content="index, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="dark:bg-darkBg">
        <SearchAndFilter
          selectValue={selectValue}
          handleSelectValue={handleSelectValue}
          search={search}
          handleSearchValue={handleSearchValue}
        />
        <Countries
          countriesData={countriesData}
          selectValue={selectValue}
          search={search}
        />
      </main>

      <Footer />
    </div>
  );
}
