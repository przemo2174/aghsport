import React from 'react'
import ReactDOM from 'react-dom'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'

import './index.css'
import AppRouter from './router'
import registerServiceWorker from './registerServiceWorker'

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <AppRouter />
  </MuiThemeProvider>,
  document.getElementById('root'))
registerServiceWorker()
