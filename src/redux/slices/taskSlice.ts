import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITask } from "../../interfaces";

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
    },

    deleteTask: (state, action: PayloadAction<string>) => {
      const taskIdToDelete = action.payload;
      state.tasks = state.tasks.filter(task => task._id !== taskIdToDelete);
      localStorage.setItem("workSmartTasks", JSON.stringify(state.tasks));
    },
  },
});

export const { addTask, deleteTask } = taskSlice.actions;