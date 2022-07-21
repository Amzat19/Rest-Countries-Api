import CountryDetails from "../components/CountryDetails";
import { useRouter } from "next/router";

const CountryDetailsPage = () => {
    const router = useRouter();
    const countryName = router.query.countryName;
    return (
        <CountryDetails countryName={countryName}/>
    )
}

export default CountryDetailsPage;