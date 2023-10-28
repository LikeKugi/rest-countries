import { RootState } from '@/store/store';

export const selectDetailsCountry = (state: RootState) => state.details.currentCountry;
export const selectDetailsStatus = (state: RootState) => state.details.status;
export const selectDetailsError = (state: RootState) => state.details.error;
