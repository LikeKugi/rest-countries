import { createActionFn } from '@/store/types';
import { ThemeConstants } from '@/store/theme/theme.constants';
import { ThemeNames } from '@/utils';

export const setTheme: createActionFn<ThemeNames> = (theme) => ({
  type: ThemeConstants.SET_THEME,
  payload: theme as ThemeNames,
});
