import React, { Component, useContext } from 'react'

import { Link } from "react-router-dom";
import { TodoContext } from '../context/TodoContext';


const NavBar = () => {
  const { todos } = useContext(TodoContext)
  return (
    <nav className="navbar bg-light navbar-expand-lg navbar-light">
      <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
          <Link to="/" className="nav-link">Todos</Link>
        </li>
        <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Todo</Link>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="navbar-item">
          <a href="#" className="nav-link"> Todos Count: {todos.length}</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
