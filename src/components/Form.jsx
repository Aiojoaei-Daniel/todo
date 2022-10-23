import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import { addTodos } from "../redux/todos";
import { changeStatus } from "../redux/statusTodos";
import { FILTER_OPTION } from "../copy";

const Form = () => {
  const dispatch = useDispatch();
  const inputText = useRef("");

  const handleAddTodo = (event) => {
    event.preventDefault();
    const todo = inputText.current.value;
    if (todo) {
      dispatch(addTodos(todo));
      inputText.current.value = "";
    }
  };

  const handleSetStatus = (event) => {
    const status = event.target.value;
    dispatch(changeStatus(status));
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input type="text" className="todo-input" ref={inputText} />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={handleSetStatus}>
          <option value="all">{FILTER_OPTION.ALL}</option>
          <option value="completed">{FILTER_OPTION.COMPLETED}</option>
          <option value="uncompleted">{FILTER_OPTION.UNCOMPLETED}</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
