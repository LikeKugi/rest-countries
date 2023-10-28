import { IAction, IControlsInitialState } from '@/store/types';
import { ControlsConstants } from '@/store/controls/controls.constants';

const initialState: IControlsInitialState = {
  query: '',
  region: '',
};

export const controlsReducer = (state: IControlsInitialState = initialState, action: IAction<unknown>): IControlsInitialState => {
  switch (action.type) {
    case ControlsConstants.SET_SEARCH:
      return {
        ...state,
        query: action.payload as string,
      };
    case ControlsConstants.SET_REGION:
      return {
        ...state,
        region: action.payload as string,
      }
    default:
      return state;
  }
};
