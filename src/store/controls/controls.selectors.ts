import { RootState } from '@/store/store';

export const selectControlsQuery = (state: RootState) => state.controls.query;
export const selectControlsRegion = (state: RootState) => state.controls.region;
export const selectControls = (state: RootState) => state.controls;
