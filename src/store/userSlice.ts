import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  address: string;
  email: string;
  phone: string;
}

const initialState: UserState = {
  name: '',
  address: '',
  email: '',
  phone: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      state.name = action.payload.name;
      state.address = action.payload.address;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
