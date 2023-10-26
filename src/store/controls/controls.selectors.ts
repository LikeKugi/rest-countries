import { RootState } from '@/store/store';

export const selectControlsQuery = (state: RootState) => state.controls.query;
