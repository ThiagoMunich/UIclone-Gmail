import React, { useState } from "react"

import Paper from "@material-ui/core/Paper"
import Avatar from "@material-ui/core/Avatar"
import MenuIcon from "@material-ui/icons/Menu"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"

import { makeStyles } from "@material-ui/core/styles"

import DialogNotImplemented from "../DialogNotImplemented"
import profilePicture from "../../assets/images/profilePicture.jpg"

const useStyles = makeStyles((theme) => ({
  root: {
    height: 50,
    width: "100%",
    display: "flex",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    flex: 1,
    marginLeft: theme.spacing(1),
  },
  iconButton: {
    padding: 10,
  },
  meetingText: {
    fontSize: 20,
    fontWeight: 700,
  },
}))

export default function MeetingHeader() {
  const classes = useStyles()

  const [openDialog, setOpenDialog] = useState(false)

  return (
    <>
      <Paper className={classes.root} elevation={0}>
        <IconButton
          className={classes.iconButton}
          onClick={() => setOpenDialog(true)}
        >
          <MenuIcon />
        </IconButton>

        <Typography className={classes.meetingText}>Meeting</Typography>

        <IconButton className={classes.iconButton}>
          <Avatar alt="kabal" src={profilePicture} />
        </IconButton>
      </Paper>

      <DialogNotImplemented
        open={openDialog}
        close={() => setOpenDialog(false)}
      />
    </>
  )
}
