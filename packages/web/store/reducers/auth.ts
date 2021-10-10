import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Router from 'next/router';

interface IUser {
  access_token: string;
  token_type: string;
}

interface IUserState {
  isAuthenticated: boolean;
  user: IUser;
}

const initialState: IUserState = {
  isAuthenticated: false,
  user: {
    access_token: "",
    token_type: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LOGIN: (state, action: PayloadAction<IUser>) => {
      const { access_token, token_type } = action.payload;
      state.isAuthenticated = true;
      state.user = { access_token, token_type };
    },
    LOGOUT: (state) => {
      Router.replace('/login');
      state.isAuthenticated = false;
      state.user = { access_token: "", token_type: "" };
    },
  },
});

export const { LOGIN, LOGOUT } = authSlice.actions;

export default authSlice.reducer;
