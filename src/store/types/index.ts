import { ThemeConstants } from '@/store/theme/theme.constants';

export type PayloadAction<T> = T

export interface IAction<T> {
  type: ThemeConstants | string,
  payload: PayloadAction<T>
}

export type createActionFn<T> = (arg: T) => IAction<T>
