import { combineReducers } from 'redux';
import { themeReducer } from '@/store/theme/theme.reducer';
import { countriesReducer } from '@/store/countries/countries.reducer';
import { controlsReducer } from '@/store/controls/controls.reducer';
import { detailsReducer } from '@/store/details/details.reducer';

export const RootReducer = combineReducers({
  theme: themeReducer,
  countries: countriesReducer,
  controls: controlsReducer,
  details: detailsReducer,
})
