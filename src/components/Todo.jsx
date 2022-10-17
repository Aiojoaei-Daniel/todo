import React from "react";

const Todo = ({ setTodos, todo, todos }) => {
  const handleCompleteTodo = () => {
    setTodos(
      todos.map((oldTodo) => {
        if (oldTodo.id === todo.id) {
          return { ...oldTodo, completed: !oldTodo.completed };
        } else {
          return oldTodo;
        }
      })
    );
  };

  const handleRemoveTodo = () => {
    const newTodos = todos.filter((oldTodo) => oldTodo.id !== todo.id);
    setTodos(newTodos);
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
