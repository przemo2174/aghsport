import React from 'react'

// import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/Toolbar'

import './Main.css'

import Map from './components/map/Map'
import SportPanel from './components/sport-panel/SportPanel'
import LocationPanel from './components/location-panel/LocationPanel'

class Main extends React.Component {
  render () {
    return (
      <div className='aghsport-main'>
        <div className='aghsport-main__map'>
          <Map />
        </div>
        <div className='aghsport-main__filters'>
          <SportPanel />
          <LocationPanel />
        </div>
      </div>
    )
  }
}

export default Main
