import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  statusTodos: "All",
};

export const statusTodosSlice = createSlice({
  name: "statusTodos",
  initialState,
  reducers: {
    changeStatus: (state, action) => {
      state.statusTodos = action.payload;
    },
  },
});

export const { changeStatus } = statusTodosSlice.actions;
export default statusTodosSlice.reducer;
