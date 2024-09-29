import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  task: null,
  refresh: false,
};
const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTask(state, action) {
      state.task = action.payload;
    },
    refreshPage(state) {
      state.refresh = !state.refresh;
    },
  },
});
export const { setTask, refreshPage } = taskSlice.actions;
export default taskSlice.reducer;
