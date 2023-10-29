import { IAction, ICountriesInitialState, Status } from '@/store/types';
import { CountriesConstants } from '@/store/countries/countries.constants';
import { ICountry } from '@/types/countriesTypes';

const initialState: ICountriesInitialState = {
  status: Status.IDLE,
  error: null,
  list: [],
};

export const countriesReducer = (
  state: ICountriesInitialState = initialState,
  action: IAction<unknown>,
): ICountriesInitialState => {
  switch (action.type) {
    case CountriesConstants.SET_COUNTRIES:
      return {
        error: null,
        status: Status.RECEIVED,
        list: action.payload as ICountry[],
      };
    case CountriesConstants.SET_LOADING:
      return {
        ...state,
        error: null,
        status: Status.LOADING,
      };
    case CountriesConstants.SET_ERROR:
      return {
        ...state,
        status: Status.REJECTED,
        error: action.payload as string,
      };
    default:
      return state;
  }
};
