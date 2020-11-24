import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { deleteTodo, getTodos } from "../api"

const TodosList = () => {


  const removeTodo = async (id) => {
    const { success } = await deleteTodo(id)
    if (!success) return
    setTodos(todos.filter(todo => todo._id !== id))
  }

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
                    <button onClick={() => removeTodo(todo._id)} className="ml-4 btn-outline-danger btn">Remove</button>
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
