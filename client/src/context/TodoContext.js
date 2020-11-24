import React, { useState, useEffect, createContext } from 'react'
import { deleteTodo, getTodos } from '../api'

export const TodoContext = createContext()

export const TodoProvider = props => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    // define the fn and called later, 
    // give me the possibility to use async await for axios promises
    console.log('use effect in context')
    const fetchTodos = async () => {
      const todos = await getTodos()
      setTodos(todos)
    }
    fetchTodos()
    return () => console.log(`Component: (TodosList) is unmounted`);
  }, [])

  const removeTodo = async (id) => {
    const { success } = await deleteTodo(id)
    if (!success) return
    setTodos(todos.filter(todo => todo._id !== id))
  }

  const value = {
    todos,
    removeTodo,
    setTodos
  }

  return (
    <TodoContext.Provider value={value}>
      {props.children}
    </TodoContext.Provider>

  )
}
