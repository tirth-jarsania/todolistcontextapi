import React,{ useContext } from 'react';
import { TodoListContext } from '../context/TodoListContext';

 function Todos({ text,id,done}) {
     //addEventListener typo things
     const { removeTodo, toggleTodo } = useContext(TodoListContext)
     return (
         <div className="todo">
             <li className={`todo-item ${done?"completed" :""}`}>{text}</li>
             <button onClick={()=>toggleTodo(id)}
                className ="complete-btn">
                <i className="fas fa-check"/>
             </button>
             <button onClick = {()=>removeTodo(id)}
                className="trash-btn">
                <i className="fas fa-trash"/>
            </button>
         </div>
     )
 }
 
 export default Todos