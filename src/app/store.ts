import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartsSlice from './slices/cartsSlice';
import { cartsApi } from './api/cartsApi';
import { productsApi } from './api/productsApi';

const store = configureStore({
  reducer: {
    [cartsApi.reducerPath]: cartsApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    carts: cartsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartsApi.middleware, productsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
