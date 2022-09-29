import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'

import { Home } from './pages/Home'
import { Profile } from './pages/Profile'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/profile/:id">
          <Profile />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
