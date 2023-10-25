import { combineReducers } from 'redux';
import { themeReducer } from '@/store/theme/theme.reducer';
import { countriesReducer } from '@/store/countries/countries.reducer';

export const RootReducer = combineReducers({
  theme: themeReducer,
  countries: countriesReducer,
})
