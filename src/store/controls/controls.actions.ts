import { createActionFn } from '@/store/types';
import { ControlsConstants } from '@/store/controls/controls.constants';

export const setSearch: createActionFn<string> = (query) => ({
  type: ControlsConstants.SET_SEARCH,
  payload: query as string,
})

export const setRegion: createActionFn<string> = (region) => ({
  type: ControlsConstants.SET_REGION,
  payload: region as string,
})

export const clearControls: createActionFn<null> = () => ({
  type: ControlsConstants.CLEAR_CONTROLS,
  payload: null,
})
