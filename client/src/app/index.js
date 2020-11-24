import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { TodosList, TodosCreate, TodosEdit } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'
import { TodoProvider } from '../context/TodoContext'

function App() {
  return (
    <Router>
      <TodoProvider>
        <NavBar />
        <Switch>
          <Route path="/" exact component={TodosList} />
          <Route path="/create" exact component={TodosCreate} />
          <Route
            path="/edit/:id"
            exact
            component={TodosEdit}
          />
        </Switch>
      </TodoProvider>
    </Router>
  )
}

export default App
