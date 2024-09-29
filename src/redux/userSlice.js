import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoginUser(state, action) {
      state.user = action.payload;
    },
    logoutUser(state) {
      state.user = null;
    },
  },
});
export const { setLoginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
