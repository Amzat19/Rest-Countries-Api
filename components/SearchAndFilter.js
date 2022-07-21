import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

const SearchAndFilter = ({ selectValue, handleSelectValue, search, handleSearchValue }) => {
    return (
        <section className="pt-8 w-[88vw] m-auto md:flex md:justify-between">
          <div className="relative">
            <FontAwesomeIcon icon={ faMagnifyingGlass } className="absolute top-4 left-4 search dark:dark-search"/>
            <input type="search" name="search-countries" placeholder="Search for a country..." value={search} onChange={handleSearchValue} className="shadow-customShadow border w-[88vw] md:w-80 h-12 rounded-md pl-10 text-sm dark:bg-darkElem dark:border-darkElem dark:text-white dark:placeholder:text-white"/>
          </div>
          <div className="pt-10 text-sm font-semibold relative w-44 md:pt-0">
            <FontAwesomeIcon icon={ faAngleDown } className="absolute right-3 top-[60px] md:top-5"/>
            <select className="h-14 border w-44 rounded-md pl-2 shadow-customShadow appearance-none hover:cursor-pointer dark:bg-darkElem dark:border-darkElem" value={selectValue} onChange={handleSelectValue}>
              <option hidden>Filter By Region</option>
              <option className="font-semibold" value='Africa'>Africa</option>
              <option className="font-semibold" value='Americas'>America</option>
              <option className="font-semibold" value='Asia'>Asia</option>
              <option className="font-semibold" value='Europe'>Europe</option>
              <option className="font-semibold" value='Oceania'>Oceania</option>
            </select>
          </div>
        </section>
    )
}

export default SearchAndFilter;