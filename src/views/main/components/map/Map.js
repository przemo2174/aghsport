import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet'
import Button from '@material-ui/core/Button'

import './Map.css'

const fakeLocations = [
  { id: 0, lat: 50.0647, lng: 19.9450, name: 'S.P. 153 Kraków', user: 'Jan Kowalski', price: 50, sport: 'football' },
  { id: 1, lat: 50.070425, lng: 19.922492, name: 'S.P. 153 Kraków', user: 'Jan Kowalski', price: 50, sport: 'football' },
  { id: 2, lat: 50.069323, lng: 19.959228, name: 'S.P. 153 Kraków', user: 'Jan Kowalski', price: 50, sport: 'football' },
  { id: 3, lat: 50.051249, lng: 19.928329, name: 'S.P. 153 Kraków', user: 'Jan Kowalski', price: 50, sport: 'football' },
  { id: 4, lat: 50.067670, lng: 19.987037, name: 'S.P. 153 Kraków', user: 'Jan Kowalski', price: 50, sport: 'football' },
  { id: 5, lat: 50.070314, lng: 19.940517, name: 'S.P. 153 Kraków', user: 'Jan Kowalski', price: 50, sport: 'football' },
  { id: 6, lat: 50.055879, lng: 120.011413, name: 'S.P. 153 Kraków', user: 'Jan Kowalski', price: 50, sport: 'football' },
  { id: 7, lat: 50.070425, lng: 19.916827, name: 'S.P. 153 Kraków', user: 'Jan Kowalski', price: 50, sport: 'football' }
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
                  <h2>{ loc.name }</h2>
                  <h3>Sport: { loc.sport }</h3>
                  <div>Added by: { loc.user }</div>
                  <div>Price: { loc.price } PLN</div>
                  <Button className='aghsport-map__popup-button' href={`/details/${loc.id}`}>More</Button>
                  <div style={{ clear: 'both' }}></div>
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
