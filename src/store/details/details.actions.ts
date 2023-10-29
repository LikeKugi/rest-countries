import { createActionFn, IAction, Status } from '@/store/types';
import { DetailsConstants } from '@/store/details/details.constants';
import { ICountry } from '@/types/countriesTypes';
import { Dispatch } from 'redux';
import { RootState } from '@/store/store';
import axios from 'axios';
import { setCountriesError } from '@/store/countries/countries.actions';

export const setLoadingDetails: createActionFn<Status> = () => ({
  type: DetailsConstants.SET_LOADING,
  payload: Status.LOADING,
});

export const setErrorDetails: createActionFn<string> = (msg) => ({
  type: DetailsConstants.SET_ERROR,
  payload: msg as string,
});

export const setCountryDetails: createActionFn<ICountry> = (country) => ({
  type: DetailsConstants.SET_COUNTRY,
  payload: country as ICountry,
});

export const setCountryBorders: createActionFn<Array<string[]>> = (countries) => ({
  type: DetailsConstants.SET_BORDERS,
  payload: countries as Array<string[]>,
});

export const loadCountryByCode =
  (code: string) =>
  (
    dispatch: Dispatch<IAction<unknown>>,
    _: RootState,
    {
      client,
      api,
    }: {
      client: typeof axios;
      api: {
        BASE_URL: string;
        ALL_COUNTRIES: string;
        searchByCountry: (arg: string) => string;
        filterByCode: (arg: string[]) => string;
      };
    },
  ) => {
    dispatch(setLoadingDetails());
    client
      .get(api.filterByCode([code]))
      .then(({ data }) => dispatch(setCountryDetails(data[0])))
      .catch((e) => dispatch(setCountriesError(e.message)));
  };

export const loadBorders =
  (borders: string[]) =>
  (
    dispatch: Dispatch<IAction<unknown>>,
    _: RootState,
    {
      client,
      api,
    }: {
      client: typeof axios;
      api: {
        BASE_URL: string;
        ALL_COUNTRIES: string;
        searchByCountry: (arg: string) => string;
        filterByCode: (arg: string[]) => string;
      };
    },
  ) => {
    client
      .get(api.filterByCode(borders))
      .then(({ data }) =>
        dispatch(setCountryBorders(data.map((c: ICountry) => [c.name.official, c.cca3]))),
      );
  };
