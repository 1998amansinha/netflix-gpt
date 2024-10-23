import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState : null,
  reducers: {
    addUser: (state, action) => {
      return {
        uid: action.payload.uid,
        displayName: action.payload.displayName,
        email: action.payload.email,
      };
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
