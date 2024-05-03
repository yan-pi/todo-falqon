import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  password: string;
  isAuthenticated: boolean; 
}

const initialState: UserState = {
  password: 'falqon',
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    authenticateUser: (state) => {
      state.isAuthenticated = true;
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { setPassword, authenticateUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
