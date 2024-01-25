import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/userSlice";
import { taskSlice } from "./slices/taskSlice";
import { teamSlice } from "./slices/teamSlice";
// ...

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    task: taskSlice.reducer,
    team: teamSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
