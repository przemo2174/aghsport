import React from 'react'
import ReactDOM from 'react-dom'
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
// pick utils
import MomentUtils from 'material-ui-pickers/utils/moment-utils'
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils'
import LuxonUtils from 'material-ui-pickers/utils/luxon-utils'

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
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <AppRouter />
    </MuiPickersUtilsProvider>
  </MuiThemeProvider>,
  document.getElementById('root'))
registerServiceWorker()
