import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { enqueueSnackbar } from "notistack";
import { IMember } from "../../interfaces";

interface IInitialState {
  team: IMember[];
}

const initialState: IInitialState = {
  team: localStorage.getItem("workSmartTeam")
    ? JSON.parse(localStorage.getItem("workSmartTeam")!)
    : [],
};

export const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    addMember: (state, action: PayloadAction<IMember>) => {
      const newMember = [...state.team, action.payload];
      state.team = newMember;
      localStorage.setItem("workSmartTeam", JSON.stringify(state.team));
      enqueueSnackbar(`New team member added successfully`, {
        variant: "success",
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
    },
  },
});

export const { addMember } = teamSlice.actions;
