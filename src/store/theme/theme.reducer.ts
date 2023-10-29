import { ThemeNames } from '@/utils';
import { IAction } from '@/store/types';
import { ThemeConstants } from '@/store/theme/theme.constants';

export const themeReducer = (
  state: ThemeNames = ThemeNames.LIGHT,
  { type, payload }: IAction<unknown>,
) => {
  switch (type) {
    case ThemeConstants.SET_THEME:
      return payload;
    default:
      return state;
  }
};
