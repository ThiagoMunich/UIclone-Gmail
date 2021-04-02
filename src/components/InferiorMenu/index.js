import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Badge from '@material-ui/core/Badge'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

import { makeStyles } from '@material-ui/core/styles'

import MailIcon from '@material-ui/icons/Mail'
import MailOutlinedIcon from '@material-ui/icons/MailOutlined'

import VideocamIcon from '@material-ui/icons/Videocam'
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined'

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    height: 75,
  },
  textColor: {
    fontWeight: 700,
  },
})

export default function InferiorMenu() {
  const classes = useStyles()
  let history = useHistory()
  const [value, setValue] = useState()

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
        newValue === 0 ? history.push('/') : history.push('/meetings')
      }}
      className={classes.root}
      color="secondary"
    >
      <BottomNavigationAction
        label="E-mail"
        icon={
          <Badge badgeContent={4} color="secondary">
            {value === 0 ? <MailIcon color="secondary" /> : <MailOutlinedIcon />}
          </Badge>
        }
        className={classes.textColor}
      />

      <BottomNavigationAction
        label="Meeting"
        icon={value === 1 ? <VideocamIcon color="secondary" /> : <VideocamOutlinedIcon />}
        className={classes.textColor}
      />
    </BottomNavigation>
  )
}
