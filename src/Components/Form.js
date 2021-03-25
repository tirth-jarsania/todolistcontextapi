import React, { useState, useContext } from 'react';
import { TodoListContext } from '../context/TodoListContext';

const Form = () => {
    const { addTodo , clearList } = useContext(TodoListContext);
    const [inputText, setInputText] = useState('');

    const submitTodoHandler = () => {
        console.log(inputText);
        addTodo(inputText);
        setInputText('');
    }
    const inputTodoHandler = event => setInputText(event.target.value);
    return (
        <form autoComplete="off">
          <input value={inputText}
                type="text" 
                placeholder="add new task"  
                className="todo-input"
                onChange={inputTodoHandler}
                required />
          <button type="submit" 
                  className ="todo-button"
                  onClick={submitTodoHandler}>
            <i className="fas fa-plus-square"></i>
          </button>
          <button type="submit" 
                  className ="todo-button"
                  onClick={clearList}>
            <i className="fas fa-trash"></i>
          </button>
        </form>
    )
}

export default Form;