import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IUser {
  user: {
    email: string;
    level: string;
  };
  isLoggedIn: boolean;
}

const initialState: IUser = {
  user: localStorage.getItem("workSmartUser")
    ? JSON.parse(localStorage.getItem("workSmartUser")!)
    : null,
    isLoggedIn: localStorage.getItem("workSmartUser") ? true : false
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (
      state,
      action: PayloadAction<{
        email: string;
        level: string;
      }>
    ) => {
      state.user = action.payload;
      localStorage.setItem("workSmartUser", JSON.stringify(state.user));
    },
  },
});


export const {loginUser} = userSlice.actions