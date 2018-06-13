import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

import { cities } from '../../../common/config'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    // display: 'block',
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
})

class SimpleSelect extends React.Component {
  state = {
    city: null,
    street: null,
    distance: null
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render () {
    const { classes } = this.props
    const { city, distance, street } = this.state
    const streets = _.get(_.find(cities, { name: city }), 'streets', [])

    return (
      <form className={classes.root} autoComplete='off'>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor='location-city'>{!city && 'City'}</InputLabel>
          <Select
            value={city}
            onChange={this.handleChange}
            inputProps={{
              name: 'city',
              id: 'location-city'
            }}
          >
            <MenuItem value={null}>
              <em>None</em>
            </MenuItem>
            {
              cities.map(city => (
                <MenuItem
                  key={city.id}
                  value={city.name}
                >
                  { city.name }
                </MenuItem>
              ))
            }
          </Select>
          <FormHelperText>Select a city</FormHelperText>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor='street-simple'>{ !street && 'Street' }</InputLabel>
          <Select
            value={street}
            onChange={this.handleChange}
            inputProps={{
              name: 'street',
              id: 'street-simple'
            }}
            disabled={!city}
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            {
              streets.map(street => (
                <MenuItem
                  key={street}
                  value={street}
                >
                  { street }
                </MenuItem>
              ))
            }
          </Select>
          <FormHelperText>Select a nearest street</FormHelperText>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor='distance-simple'>{!distance && 'Distance'}</InputLabel>
          <Select
            value={this.state.distance}
            onChange={this.handleChange}
            inputProps={{
              name: 'distance',
              id: 'distance-simple'
            }}
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>10 km</MenuItem>
            <MenuItem value={20}>20km</MenuItem>
            <MenuItem value={30}>30 km</MenuItem>
          </Select>
          <FormHelperText>Choose distance from give street</FormHelperText>
        </FormControl>
      </form>
    )
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleSelect)
