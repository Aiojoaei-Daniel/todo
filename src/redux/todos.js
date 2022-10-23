import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      state.todos = [
        ...state.todos,
        {
          text: action.payload,
          completed: false,
          id: Math.floor(Math.random() * 1000),
        },
      ];
    },
    changeTodos: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const { addTodos, changeTodos } = todosSlice.actions;
export default todosSlice.reducer;
