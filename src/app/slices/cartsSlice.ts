import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Cart {
  id: number;
  products: [];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

interface CartsState {
  carts: Cart[];
  error: string | undefined;
}

const initialState: CartsState = {
  carts: [],
  error: undefined,
};

const cartsSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    setCarts: (state, action: PayloadAction<Cart[]>) => {
      state.carts = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setCarts, setError } = cartsSlice.actions;
export default cartsSlice.reducer;
