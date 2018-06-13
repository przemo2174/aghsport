import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet'

import Bike from '@material-ui/icons/DirectionsRun'
import Card from '@material-ui/icons/CreditCard'
import Home from '@material-ui/icons/Home'
import Today from '@material-ui/icons/Today'
import Button from '@material-ui/core/Button'

import './Map.css'

const fakeLocations = [
  { id: 0, lat: 50.0647, lng: 19.9450, name: 'S.P. 153 Kraków', user: 'Jan Kowalski', price: 50, sport: 'football', date: '15.12.2018, 20:30' },
  { id: 1, lat: 50.070425, lng: 19.922492, name: 'S.P. 153 Kraków', user: 'Jan Kowalski', price: 50, sport: 'football', date: '15.12.2018, 20:30' },
  { id: 2, lat: 50.069323, lng: 19.959228, name: 'S.P. 153 Kraków', user: 'Jan Kowalski', price: 50, sport: 'football', date: '15.12.2018, 20:30' },
  { id: 3, lat: 50.051249, lng: 19.928329, name: 'S.P. 153 Kraków', user: 'Jan Kowalski', price: 50, sport: 'football', date: '15.12.2018, 20:30' },
  { id: 4, lat: 50.067670, lng: 19.987037, name: 'S.P. 153 Kraków', user: 'Jan Kowalski', price: 50, sport: 'football', date: '15.12.2018, 20:30' },
  { id: 5, lat: 50.070314, lng: 19.940517, name: 'S.P. 153 Kraków', user: 'Jan Kowalski', price: 50, sport: 'football', date: '15.12.2018, 20:30' },
  { id: 6, lat: 50.055879, lng: 120.011413, name: 'S.P. 153 Kraków', user: 'Jan Kowalski', price: 50, sport: 'football', date: '15.12.2018, 20:30' },
  { id: 7, lat: 50.070425, lng: 19.916827, name: 'S.P. 153 Kraków', user: 'Jan Kowalski', price: 50, sport: 'football', date: '15.12.2018, 20:30' }
]

class Map extends React.Component {
  constructor () {
    super()
    this.state = {
      lat: 50.0647,
      lng: 19.9450,
      zoom: 13
    }
  }

  render () {
    const position = [this.state.lat, this.state.lng]
    return (
      <LeafletMap scrollWheelZoom={false} center={position} zoom={this.state.zoom} style={{ height: '700px' }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {
          fakeLocations.map(loc => (
            <Marker key={loc.id} position={{ lat: loc.lat, lng: loc.lng }}>
              <Popup>
                <div>
                  <h2><Home style={{ verticalAlign: 'bottom', color: '#2196F3' }} /> { loc.name }</h2>
                  <h3><Bike style={{ verticalAlign: 'bottom', color: '#2196F3' }} /> { loc.sport }</h3>
                  <h4><Today style={{ verticalAlign: 'bottom', color: '#2196F3' }} /> { loc.date }</h4>
                  <h4><Card style={{ verticalAlign: 'bottom', color: '#2196F3' }} /> { loc.price } PLN</h4>
                  <div>Added by: { loc.user }</div>
                  <div className='aghsport-map__popup-button'>
                    <Button
                      style={{ color: '#2196F3' }}
                      onClick={() => alert('You have succesfully booked place!')}
                    >
                      Book Now!
                    </Button>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))
        }
      </LeafletMap>
    )
  }
}

export default Map
