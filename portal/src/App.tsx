import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.less'
import Login from './pages/login'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
