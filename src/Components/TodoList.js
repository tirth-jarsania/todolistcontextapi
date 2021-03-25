import React, {useContext} from 'react';
import { TodoListContext } from "../context/TodoListContext";
import Todos from './Todos.js';

function TodoList() {
    const { todos } = useContext(TodoListContext);
    return (
        <div className="todo-container">
            <ul className="todo-list" >
                {
                    todos.length ? 
                    todos.map((todo) => 
                    <Todos
                            text={todo.item}
                            id ={todo.id}
                            done = {todo.done}
                     />)
                    :
                    <h1>Nothing to like to show you bitch!!</h1>
                }
            </ul> 

        </div>
    )
}

export default TodoList