import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces";

 interface IInitialState {
  user: IUser | null;
  isLoggedIn: boolean;
}

const initialState: IInitialState = {
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
      action: PayloadAction<IUser>
    ) => {
      state.user = action.payload;
      localStorage.setItem("workSmartUser", JSON.stringify(state.user));
    },
  },
});


export const {loginUser} = userSlice.actions