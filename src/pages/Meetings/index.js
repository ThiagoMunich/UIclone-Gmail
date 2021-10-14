import React, { useState } from "react"

import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

import { makeStyles } from "@material-ui/core/styles"

import MeetingHeader from "../../components/MeetingHeader"
import MeetingImage from "../../assets/images/meetings.jpg"
import DialogNotImplemented from "../../components/DialogNotImplemented"

const useStyles = makeStyles({
  buttonsGrid: {
    width: "100%",
    marginTop: 20,
    padding: 10,
  },
  blueButton: {
    backgroundColor: "#4285F4",
    color: "#FFF",
    textTransform: "none",
    width: "35%",
  },
  whiteButton: {
    backgroundColor: "#FFF",
    color: "#4285F4",
    textTransform: "none",
    width: "60%",
  },
  imageGrid: {
    position: "fixed",
    bottom: "40%",
  },
  meetingImage: {
    width: "80%",
    borderRadius: 90,
  },
  imageText: {
    fontWeight: 700,
    marginTop: 10,
  },
})

export default function Meetings() {
  const classes = useStyles()

  const [openDialog, setOpenDialog] = useState(false)

  return (
    <>
      <MeetingHeader />
      <Grid container justify="space-between" className={classes.buttonsGrid}>
        <Button
          variant="contained"
          className={classes.blueButton}
          size="small"
          onClick={() => setOpenDialog(true)}
        >
          New meeting
        </Button>
        <Button
          variant="contained"
          className={classes.whiteButton}
          size="small"
          onClick={() => setOpenDialog(true)}
        >
          Join with code
        </Button>
      </Grid>
      <Grid
        container
        className={classes.imageGrid}
        direction="column"
        alignItems="center"
        spacing={3}
      >
        <img
          src={MeetingImage}
          alt="Meeting"
          className={classes.meetingImage}
        />
        <Typography variant="h6" className={classes.imageText}>
          Oops..
        </Typography>
        <Typography variant="body2">There's nothing here for you!</Typography>
      </Grid>
      <DialogNotImplemented
        open={openDialog}
        close={() => setOpenDialog(false)}
      />
    </>
  )
}
