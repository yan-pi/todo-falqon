import { combineReducers, configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";
import userReducer from "./userSlice";

interface UserState {
  password: string;
  isAuthenticated: boolean;
}

interface RootState {
  task: ReturnType<typeof taskReducer>;
  user: UserState;
}

const rootReducer = combineReducers({
  task: taskReducer,
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type { RootState };
