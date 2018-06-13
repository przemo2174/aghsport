import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import AppBar from './views/app-bar'
import Main from './views/main/Main'

const AppRouter = () => (
  <Router>
    <div>
      <AppBar />
      <Route path='/' component={Main} />
    </div>
  </Router>
)

export default AppRouter
