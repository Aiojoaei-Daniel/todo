import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeTodos } from "../redux/todos";

const Todo = ({ todo }) => {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleCompleteTodo = () => {
    const completeTodo = todos.map((oldTodo) => {
      if (oldTodo.id === todo.id) {
        return { ...oldTodo, completed: !oldTodo.completed };
      } else {
        return oldTodo;
      }
    });
    dispatch(changeTodos(completeTodo));
  };

  const handleRemoveTodo = () => {
    const remainingTodos = todos.filter((oldTodo) => oldTodo.id !== todo.id);
    dispatch(changeTodos(remainingTodos));
  };

  return (
    <div className="todo" key={todo.id}>
      <li className={`todo-item ${todo.completed ? "completed" : null}`}>
        {todo.text}
      </li>
      <button className="complete-btn" onClick={handleCompleteTodo}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={handleRemoveTodo}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
