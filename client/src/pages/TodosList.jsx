import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { getTodos } from "../api"

const TodosList = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    // define the fn and called later, 
    // give me the possibility to use async await for axios promises
    const fetchTodos = async () => {
      const todos = await getTodos()
      setTodos(todos)
    }
    fetchTodos()
  }, [])

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Todo List</h3>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>Text</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              todos.map(todo => (
                <tr key={todo._id}>
                  <td>
                    {todo.text}
                  </td>
                  <td>
                    <Link to={`/edit/${todo._id}`}>Edit</Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodosList
