import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import AppBar from './views/app-bar'
import Main from './views/main/Main'
import AddEvent from './views/add-event/'

const AppRouter = () => (
  <Router>
    <div>
      <AppBar />
      <Route exact path='/' component={Main} />
      <Route path='/add' component={AddEvent} />
    </div>
  </Router>
)

export default AppRouter
