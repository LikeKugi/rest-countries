import { createActionFn } from '@/store/types';
import { ControlsConstants } from '@/store/controls/controls.constants';

export const setSearch: createActionFn<string> = (query) => ({
  type: ControlsConstants.SET_SEARCH,
  payload: query as string,
})
