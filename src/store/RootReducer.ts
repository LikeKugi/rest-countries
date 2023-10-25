import { combineReducers } from 'redux';
import { themeReducer } from '@/store/theme/theme.reducer';

export const RootReducer = combineReducers({
  theme: themeReducer,
})
