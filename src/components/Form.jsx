import React, { useState } from "react";

import { FILTER_OPTION } from "../copy";

const Form = ({ setTodos, setStatusTodos }) => {
  const [todo, setTodo] = useState("");

  const handleAddTodo = (event) => {
    event.preventDefault();

    if (todo) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { text: todo, completed: false, id: Math.floor(Math.random() * 1000) },
      ]);

      setTodo("");
    }
  };

  const handleSetStatus = (event) => {
    setStatusTodos(event.target.value);
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        className="todo-input"
        onChange={(event) => setTodo(event.target.value)}
        value={todo}
      />
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
