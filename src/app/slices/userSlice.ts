import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../components/types';

interface UserState {
  user: User | undefined;
  isLoading: boolean;
}

const initialState: UserState = {
  user: undefined,
  isLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setUser, setLoading } = userSlice.actions;
export default userSlice.reducer;
