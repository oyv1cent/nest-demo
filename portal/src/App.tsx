import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.less'
import LoginPage from './pages/login'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
