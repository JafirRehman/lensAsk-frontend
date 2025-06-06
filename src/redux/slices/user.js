import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState:{
    user: {},
  },
  reducers: {
    updateuser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { updateuser } = userSlice.actions;

export default userSlice.reducer;
