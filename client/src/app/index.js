import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { TodosList, TodosCreate, TodosEdit } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
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
    </Router>
  )
}

export default App
