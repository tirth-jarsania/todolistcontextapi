import React from "react";
import TodoListContextProvider from "../context/TodoListContext";
import TodoList from "./TodoList";
import Form from "./Form";

import "../App.css";

const App = () => {
  return (
    <TodoListContextProvider>
      <header>
        <h1>TodoContextApi</h1>
      </header>
      <Form />
      <TodoList />
    </TodoListContextProvider>
  );
};

export default App;