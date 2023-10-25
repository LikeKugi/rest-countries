import { applyMiddleware, compose, createStore } from 'redux';
import { RootReducer } from '@/store/RootReducer';
import thunk from 'redux-thunk';
import axios from 'axios';
import * as api from '@/config';

const middleWare = applyMiddleware(compose(thunk.withExtraArgument({
  client: axios,
  api,
})))

export const store = createStore(RootReducer,  middleWare)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
