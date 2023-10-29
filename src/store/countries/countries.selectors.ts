import { RootState } from '@/store/store';

export const selectCountriesQuantity = (state: RootState) => state.countries.list.length;
export const selectAllCountries = (state: RootState) => state.countries.list;
export const selectErrorCountries = (state: RootState) => state.countries.error;
export const selectStatusCountries = (state: RootState) => state.countries.status;

export const selectCountriesData = (state: RootState) => state.countries;

export const selectVisibleCountries = (
  state: RootState,
  { query: search, region }: { query: string; region: string },
) => {
  if (!search && !region) {
    return state.countries.list;
  }
  return state.countries.list.filter((country) => {
    if (region && country.region !== region) return false;
    const pattern = new RegExp(search, 'gi');
    const testObj = [country.name.common, country.name.official, country.cca3, country.cca2];
    return testObj.some((el) => pattern.test(el));
  });
};
