import React, { useState, useEffect } from "react";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

import { useSelector, useDispatch } from "react-redux";
import { changeTodos } from "./redux/todos";

import { TITLE, TODOS_STATUS, COLLECTION_NAME } from "./copy";
import "./App.css";

function App() {
  const [filteredTodos, setFilteredTodos] = useState([]);

  const { todos } = useSelector((state) => state.todos);
  const { statusTodos } = useSelector((state) => state.statusTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [statusTodos, todos]);

  const filterHandler = () => {
    switch (statusTodos) {
      case TODOS_STATUS.COMPLETED:
        setFilteredTodos(todos.filter((todo) => todo.completed));
        break;
      case TODOS_STATUS.UNCOMPLETED:
        setFilteredTodos(todos.filter((todo) => !todo.completed));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem(COLLECTION_NAME, JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem(COLLECTION_NAME) === null) {
      localStorage.setItem(COLLECTION_NAME, JSON.stringify([]));
    } else {
      let localTodos = JSON.parse(localStorage.getItem(COLLECTION_NAME));
      dispatch(changeTodos(localTodos));
    }
  };

  return (
    <div className="App">
      <header>
        <h1>{TITLE}</h1>
      </header>
      <Form />
      <TodoList filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
