import { combineReducers, configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskReducer";
import userReducer from "./userReducer";

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
