import React, {useContext} from 'react';
import { TodoListContext } from "../context/TodoListContext";
import Todos from './Todos';

function TodoList() {
    const { todos } = useContext(TodoListContext);
    return (
        <div className="todo-container">
        {todos.length ? (
            <ul className="list">
              {todos.map(todo => {
                return <Todos text={todo.item} id={todo.id} done={todo.done}/>;
              })}
            </ul>
          ) : (
            <div className="no-tasks">No Todos</div>
          )}
        </div>
    );
}
export default TodoList