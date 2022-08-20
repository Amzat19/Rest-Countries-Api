import { useRouter } from 'next/router';
import CountryDetails from '../components/CountryDetails';

const CountryDetailsPage = () => {
  const router = useRouter();
  const { countryName } = router.query;

  return <CountryDetails countryName={countryName} />;
};

export default CountryDetailsPage;
