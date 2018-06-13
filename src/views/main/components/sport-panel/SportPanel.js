import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions'

import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'

import { sports } from '../../../common/config'

const styles = theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15)
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20
  },
  details: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  switcher: {
    flexBasis: '30%'
  },
  column: {
    flexBasis: '33.33%'
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
})

class SportPanel extends React.Component {
  state = {
    checked: []
  }

  onChange = (id) => {
    const { checked } = this.state
    const inArray = checked.indexOf(id) > -1
    const newChecked = inArray
      ? checked.filter(item => item !== id)
      : checked.concat([id])
    this.setState({ checked: newChecked })
  }

  onClear = () => {
    this.setState({ checked: [] })
  }

  render () {
    const { classes } = this.props
    const { checked } = this.state

    return (
      <div className={classes.root}>
        <ExpansionPanel>

          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
            <div className={classes.column}>
              <Typography className={classes.heading}>Sport</Typography>
            </div>
            <div className={classes.column}>
              <Typography className={classes.secondaryHeading}>Choose sport</Typography>
            </div>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails className={classes.details}>
            {
              sports.map(sport => (
                <FormControlLabel
                  className={classes.switcher}
                  key={sport.id}
                  control={
                    <Switch
                      checked={checked.indexOf(sport.id) > -1}
                      onChange={this.onChange.bind(this, sport.id)}
                      value={sport.id}
                      color='primary'
                    />
                  }
                  label={sport.displayName}
                />
              ))
            }
          </ExpansionPanelDetails>

          <Divider />

          <ExpansionPanelActions>
            <Button onClick={this.onClear}>Clear</Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
      </div>
    )
  }
}

SportPanel.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SportPanel)
