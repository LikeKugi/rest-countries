import { RootState } from '@/store/store';

export const selectAllCountries = (state: RootState) => state.countries.list;
export const selectErrorCountries = (state: RootState) => state.countries.error;
export const selectStatusCountries = (state: RootState) => state.countries.status;

export const selectCountriesData = (state: RootState) => state.countries;
