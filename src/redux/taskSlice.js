import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  task: null,
};
const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTask(state, action) {
      state.task = action.payload;
    },
  },
});
export const { setTask } = taskSlice.actions;
export default taskSlice.reducer;
