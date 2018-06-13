import React from 'react'
import { Link } from 'react-router-dom'

import Bar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

import config from '../common/config'

import './AppBar.css'

const buttons = [
  { id: 'addEvent', name: 'Add Event', link: '/add' },
  { id: 'login', name: 'Login', link: '/login' }
]

class AppBar extends React.Component {
  render () {
    return (
      <Bar className='aghsport-app-bar' color='primary'>
        <Toolbar className='aghsport-app-bar__wrapper'>
          <Link to='/'>{ config.app.title.toUpperCase() }</Link>
          <div className='aghsport-app-bar__divider' />
          { buttons.map(button => (
            <Button
              key={button.name}
              variant='contained'
              color='primary'
              href={button.link}
              className='aghsport-app-bar__button'
            >
              { button.name }
            </Button>
          )) }
        </Toolbar>
      </Bar>
    )
  }
}

export default AppBar
