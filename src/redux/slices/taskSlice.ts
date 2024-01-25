import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITask } from "../../interfaces";
import { enqueueSnackbar } from "notistack";

interface IInitialState {
  tasks: ITask[];
}

const initialState: IInitialState = {
  tasks: localStorage.getItem("workSmartTasks")
    ? JSON.parse(localStorage.getItem("workSmartTasks")!)
    : [],
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const newTask = [...state.tasks, action.payload];
      state.tasks = newTask;
      localStorage.setItem("workSmartTasks", JSON.stringify(state.tasks));
      enqueueSnackbar(`New task added successfully`, {
        variant: "success",
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
    },
  },
});

export const { addTask } = taskSlice.actions;
