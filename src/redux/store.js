import { configureStore } from "@reduxjs/toolkit";
import todos from "./todos";
import statusTodos from "./statusTodos";

export default configureStore({
  reducer: {
    todos,
    statusTodos,
  },
});
