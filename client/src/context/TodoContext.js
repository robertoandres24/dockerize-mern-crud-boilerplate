import React, { useEffect, createContext, useReducer } from 'react'
import { deleteTodo, getTodos } from '../api'
import TodoReducer from './TodoReducer'

export const TodoContext = createContext()


const initialState = { todos: [] }

export const TodoProvider = props => {

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  useEffect(() => {
    // define the fn and called later, 
    // give me the possibility to use async await for axios promises
    const fetchTodos = async () => {
      const todos = await getTodos()
      dispatch({ type: 'FETCH_SUCCESS', payload: todos })
    }
    fetchTodos()
    return () => console.log(`Component: (TodosList) is unmounted`);
  }, [])

  const removeTodo = async (id) => {
    const { success } = await deleteTodo(id)
    if (!success) return
    dispatch({ type: 'REMOVE', payload: id })
  }

  const addTodo = (todo) => {
    dispatch({ type: 'ADD', payload: todo })
  }

  const contextUpdateTodo = ({ id, text }) => {
    dispatch({ type: 'UPDATE', payload: { id, text } })
  }

  const value = {
    todos: state.todos,
    removeTodo,
    contextUpdateTodo,
    addTodo
  }

  return (
    <TodoContext.Provider value={value}>
      {props.children}
    </TodoContext.Provider>

  )
}
