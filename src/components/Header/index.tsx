import React, { useState } from "react"

import Paper from "@material-ui/core/Paper"
import Avatar from "@material-ui/core/Avatar"
import MenuIcon from "@material-ui/icons/Menu"
import InputBase from "@material-ui/core/InputBase"
import IconButton from "@material-ui/core/IconButton"

import { makeStyles } from "@material-ui/core/styles"

import DialogNotImplemented from "../DialogNotImplemented"
import profilePicture from "../../assets/images/profilePicture.jpg"

const useStyles = makeStyles((theme) => ({
  root: {
    height: 56,
    width: "100%",
    display: "flex",
    marginBottom: 12,
    alignItems: "center",
  },
  input: {
    flex: 1,
    marginLeft: theme.spacing(1),
  },
  iconButton: {
    padding: 10,
  },
}))

export default function Header() {
  const classes = useStyles()

  const [openDialog, setOpenDialog] = useState<boolean>(false)

  return (
    <>
      <Paper component="form" className={classes.root}>
        <IconButton
          className={classes.iconButton}
          onClick={() => setOpenDialog(true)}
        >
          <MenuIcon />
        </IconButton>

        <InputBase
          readOnly
          className={classes.input}
          placeholder="Search e-mail"
        />

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
