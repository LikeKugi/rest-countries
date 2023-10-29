import { IAction, IDetailsInitialState, Status } from '@/store/types';
import { DetailsConstants } from '@/store/details/details.constants';
import { ICountry } from '@/types/countriesTypes';

const initialState: IDetailsInitialState = {
  currentCountry: null,
  error: null,
  status: Status.IDLE,
  borders: null,
}

export const detailsReducer = (state: IDetailsInitialState = initialState, action: IAction<unknown>): IDetailsInitialState => {
  switch (action.type) {
    case DetailsConstants.SET_LOADING:
      return {
        ...state,
        error: null,
        status: Status.LOADING,
        borders: null,
      };
    case DetailsConstants.SET_ERROR:
      return {
        ...state,
        status: Status.REJECTED,
        error: action.payload as string,
        borders: null,
      };
    case DetailsConstants.SET_COUNTRY:
      return {
        ...state,
        status: Status.RECEIVED,
        error: null,
        currentCountry: action.payload as ICountry,
        borders: null,
      };
    case DetailsConstants.SET_BORDERS:
      return {
        ...state,
        status: Status.RECEIVED,
        error: null,
        borders: action.payload as string[],
      }
    default:
      return state;
  }
}
