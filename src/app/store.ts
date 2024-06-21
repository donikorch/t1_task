import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartsSlice from './slices/cartsSlice';
import { userApi } from './api/userApi';
import { productsApi } from './api/productsApi';
import userSlice from './slices/userSlice';

const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    carts: cartsSlice,
    user: userSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, productsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
