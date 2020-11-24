import React, { Component } from 'react'

import { Link } from "react-router-dom";


class NavBar extends Component {
  render() {
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
      </nav>
    )
  }
}

export default NavBar
