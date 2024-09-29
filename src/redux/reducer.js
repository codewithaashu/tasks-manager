import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import taskSlice from "./taskSlice";
const rootReducer = combineReducers({
  user: userSlice,
  task: taskSlice,
});
export default rootReducer;
