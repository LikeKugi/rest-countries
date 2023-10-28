import { JSX } from 'react';
import { ICountry, ICountryInfo } from '@/types/countriesTypes';
import Card from '@/components/Card/Card';
import GridBox from '@/components/GridBox/GridBox';
import Controls from '@/components/Controls/Controls';
import { useAppSelector } from '@/store/hooks';
import {
  selectErrorCountries,
  selectStatusCountries,
  selectVisibleCountries
} from '@/store/countries/countries.selectors';
import { Status } from '@/store/types';
import { selectControls } from '@/store/controls/controls.selectors';

const HomePage = (): JSX.Element => {

  const controlsQuery = useAppSelector(selectControls);

  const countries: ICountry[] = useAppSelector(state => selectVisibleCountries(state, controlsQuery));

  const loadingErrorData = useAppSelector(selectErrorCountries);
  const statusLoadingCountries = useAppSelector(selectStatusCountries);

  return (
    <>
      <Controls/>
      <GridBox>
        {(statusLoadingCountries === Status.LOADING) && <p>Loading data...</p>}
        {loadingErrorData && <h2>Can't fetch data: {loadingErrorData}</h2>}
        {countries.map((c) => {
          const countryInfo: ICountryInfo = {
            img: c.flags.png,
            name: c.name.official,
            info: [
              {
                title: 'Population',
                description: c.population.toLocaleString(),
              },
              {
                title: 'Region',
                description: c.region,
              },
              {
                title: 'Capital',
                description: c.capital,
              },
            ],
            linkPath: c.cca3,
          };
          return <Card key={c.cca3} {...countryInfo} />;
        })}
      </GridBox>
    </>
  );
};
export default HomePage;
