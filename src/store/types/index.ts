import { ThemeConstants } from '@/store/theme/theme.constants';
import { CountriesConstants } from '@/store/countries/countries.constants';
import { ICountry } from '@/types/countriesTypes';
import { ControlsConstants } from '@/store/controls/controls.constants';

export type PayloadAction<T> = T

export interface IAction<T> {
  type: ThemeConstants | CountriesConstants | ControlsConstants |string,
  payload: PayloadAction<T>
}

export type createActionFn<T> = (arg?: T) => IAction<T>

export const enum Status {
  IDLE = 'idle',
  LOADING = 'loading',
  RECEIVED = 'received',
  REJECTED = 'rejected',
}

export interface ICountriesInitialState {
  status: Status,
  error: string | null,
  list: ICountry[]
}

export interface IControlsInitialState {
  query: string;
  region: string;
}
