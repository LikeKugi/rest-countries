import AppRouter from '@/routes/AppRouter';
import { useEffect } from 'react';
import { loadCountries } from '@/store/countries/countries.actions';
import { IAction } from '@/store/types';
import { ICountry } from '@/types/countriesTypes';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectCountriesQuantity } from '@/store/countries/countries.selectors';

function App() {
  const dispatch = useAppDispatch();
  const countriesCount = useAppSelector(selectCountriesQuantity)

  useEffect(() => {
    if (!countriesCount) {
      dispatch(loadCountries() as unknown as IAction<ICountry[]>);
    }
  }, [dispatch, countriesCount])
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
