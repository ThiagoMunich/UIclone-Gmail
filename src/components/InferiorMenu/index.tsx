import React, { InputHTMLAttributes, useEffect, useState } from "react"

import { useHistory } from "react-router-dom"

import Badge from "@material-ui/core/Badge"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"

import { makeStyles } from "@material-ui/core/styles"

import MailIcon from "@material-ui/icons/Mail"
import VideocamIcon from "@material-ui/icons/Videocam"
import MailOutlinedIcon from "@material-ui/icons/MailOutlined"
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined"

const useStyles = makeStyles({
  root: {
    bottom: 0,
    height: 75,
    left: "50%",
    width: "100%",
    maxWidth: 444,
    position: "fixed",
    transform: "translateX(-50%)",
  },
  textColor: {
    fontWeight: 700,
  },
})

export default function InferiorMenu() {
  let history = useHistory()

  const classes = useStyles()

  const [value, setValue] = useState<number>(0)

  useEffect(() => {
    value === 0 && history.push("/")
  }, [history, value])

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(
        event: InputHTMLAttributes<HTMLInputElement>,
        newValue: number
      ) => {
        setValue(newValue)
        newValue === 0 ? history.push("/") : history.push("/meetings")
      }}
      className={classes.root}
      color="secondary"
    >
      <BottomNavigationAction
        label="E-mail"
        icon={
          <Badge badgeContent={4} color="secondary">
            {value === 0 ? (
              <MailIcon color="secondary" />
            ) : (
              <MailOutlinedIcon />
            )}
          </Badge>
        }
        className={classes.textColor}
      />

      <BottomNavigationAction
        label="Meeting"
        icon={
          value === 1 ? (
            <VideocamIcon color="secondary" />
          ) : (
            <VideocamOutlinedIcon />
          )
        }
        className={classes.textColor}
      />
    </BottomNavigation>
  )
}
