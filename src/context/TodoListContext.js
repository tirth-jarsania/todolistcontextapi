import React, {useState, useEffect, createContext} from 'react';

export const TodoListContext = createContext();
 
const TodoListContextProvider = (props) => {
    const initialState = JSON.parse(localStorage.getItem('todos')) || [];
    const [todos, setTodos] = useState(initialState);
    
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);
  
   //add Todos
    const addTodo = title => {
        console.log(title);
        console.log(todos);
        setTodos([...todos,{
            id: Date.now(),
            item: title,
            done: false
        }]);
        console.log(todos);
    }
    //toggle Todos' status
    const toggleTodo = id =>{
        setTodos(todos.map(todo => 
            todo.id !== id
            ? todo : {
                id: todo.id,
                item: todo.item,
                done: !todo.done
            }))
    }
    // Remove Todos
    const removeTodo = id => {
      setTodos(todos.filter(todo => todo.id !== id))
    }
    // Clear tasks
    const clearList = () => {
      setTodos([])
    }

    return (
      <TodoListContext.Provider
        value={{
          todos,
          addTodo,
          toggleTodo,
          removeTodo,
          clearList
        }}
      >
        { props.children }
      </TodoListContext.Provider>
    )
  }
  
  export default TodoListContextProvider
