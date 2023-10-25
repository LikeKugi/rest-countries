import { createActionFn, IAction } from '@/store/types';
import { CountriesConstants } from '@/store/countries/countries.constants';
import { ICountry } from '@/types/countriesTypes';
import { Dispatch } from 'redux';
import { RootState } from '@/store/store';
import axios from 'axios';


export const setCountries: createActionFn<ICountry[]> = (countries) => ({
  type: CountriesConstants.SET_COUNTRIES,
  payload: countries as ICountry[],
});

export const setCountriesLoading: createActionFn<boolean> = () => ({
  type: CountriesConstants.SET_LOADING,
  payload: true,
});

export const setCountriesError: createActionFn<string> = (message) => ({
  type: CountriesConstants.SET_ERROR,
  payload: message as string,
});

export const loadCountries = () => (dispatch: Dispatch<IAction<unknown>>, _: RootState, { client, api }: {
  client: typeof axios, api: {
    BASE_URL: string,
    ALL_COUNTRIES: string,
    searchByCountry: (arg: string) => string,
    filterByCode: (arg: string[]) => string,
  }
}) => {
  dispatch(setCountriesLoading());
  client.get(api.ALL_COUNTRIES).then(({ data }) => dispatch(setCountries(data))).catch(e => dispatch(setCountriesError(e.message)));
};
