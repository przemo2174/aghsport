import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'


import { Map as LeafletMap, TileLayer, Marker } from 'react-leaflet'

import { withStyles } from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green';
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import SnackbarContent from '@material-ui/core/SnackbarContent'

import Person from '@material-ui/icons/Person'
import Bike from '@material-ui/icons/DirectionsRun'
import CreditCard from '@material-ui/icons/CreditCard'

import { DateTimePicker } from 'material-ui-pickers'

import { sports } from '../common/config'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  margin: {
    margin: theme.spacing.unit * 3
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3
  },
  textField: {
    flexBasis: '50%'
  },
  snackbar: {
    // position: 'absolute',
    // top: '100%',
    backgroundColor: green[600]
  }
})

const initialState = {
  amount: '',
  cost: '',
  sport: '',
  snackVisible: false,
  selectedDate: new Date(),
  initialPosition: {
    lat: 50.0647,
    lng: 19.9450,
    zoom: 13
  }
}

class InputAdornments extends React.Component {
  state = initialState

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value })
  }

  handleDateChange = (date) => {
    this.setState({ selectedDate: date })
  }

  handleMapClick = ({ latlng: { lat, lng } }) => {
    this.setState({ initialPosition: { lat, lng } })
  }

  handleSubmit = () => {
    this.setState({ snackVisible: true })
  }

  handleClose = () => {
    this.setState({ snackVisible: false })
  }

  handleClear = () => {
    this.setState({ ...initialState })
  }

  render () {
    const { classes } = this.props
    const { initialPosition } = this.state
    const position = { lat: initialPosition.lat, lng: initialPosition.lng }

    return (
      <div className={classes.root}>
        <Grid
          container
          style={{ margin: '3rem 10%' }}
          alignItems='center'
          justify='center'
        >
          <Grid lg={6}>
            <TextField
              style={{ width: '50%' }}
              select
              label='Sport'
              className={classNames(classes.margin, classes.textField)}
              value={this.state.sport}
              onChange={this.handleChange('sport')}
              InputProps={{
                startAdornment: <InputAdornment position='start'>
                  <Bike style={{verticalAlign: 'bottom', color: '#2196F3'}} />
                </InputAdornment>
              }}
            >
              {sports.map(option => (
                <MenuItem key={option.id} value={option.id}>
                  {option.displayName}
                </MenuItem>
              ))}
            </TextField>

            <FormControl fullWidth className={classes.margin}>
              <InputLabel htmlFor='adornment-amount'>Number of free places</InputLabel>
              <Input
                style={{ width: '50%' }}
                id='adornment-amount'
                value={this.state.amount}
                onChange={this.handleChange('amount')}
                startAdornment={<InputAdornment position='start'><Person style={{ verticalAlign: 'bottom', color: '#2196F3' }} /></InputAdornment>}
              />
            </FormControl>

            <FormControl fullWidth className={classes.margin}>
              <InputLabel htmlFor='adornment-amount'>Cost per person</InputLabel>
              <Input
                style={{ width: '15%' }}
                id='adornment-amount'
                value={this.state.cost}
                onChange={this.handleChange('cost')}
                startAdornment={<InputAdornment position='start'><CreditCard style={{ verticalAlign: 'bottom', color: '#2196F3' }} /></InputAdornment>}
                endAdornment={<InputAdornment position='end'>PLN</InputAdornment>}
              />
            </FormControl>

            <div className={classes.margin}>
              <DateTimePicker
                value={this.state.selectedDate}
                disablePast
                onChange={this.handleDateChange}
                label='Choose date and time'
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5rem' }}>
              <Button variant='contained' color='primary' onClick={this.handleSubmit}>
                Save
              </Button>
              <Button onClick={this.handleClear}>
                Clear
              </Button>
            </div>
          </Grid>

          <Grid lg={6}>
            <Typography variant='headline' gutterBottom>
              Choose a place from map
            </Typography>
            <Card>
              <LeafletMap
                center={position}
                zoom={this.state.initialPosition.zoom}
                style={{ height: '700px' }}
                onClick={this.handleMapClick}
              >
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                <Marker draggable position={position} />
              </LeafletMap>
            </Card>
          </Grid>
          <Grid lg={12} style={{ height: '5%', marginTop: '3rem', textAlign: 'center' }}>
            {
              this.state.snackVisible &&
              <SnackbarContent
                className={classes.snackbar}
                message='Events was succesfully saved'
                action={
                  <Button color='default' onClick={this.handleClose}>
                    Close
                  </Button>}
              />
            }
          </Grid>
        </Grid>
      </div>
    )
  }
}

InputAdornments.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withRouter(withStyles(styles)(InputAdornments))
