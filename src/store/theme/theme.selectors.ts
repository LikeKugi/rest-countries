import { RootState } from '@/store/store';

export const selectCurrentTheme = (state: RootState) => state.theme;
