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
    padding: 10,
    width: "100%",
    marginTop: 20,
  },
  blueButton: {
    width: "35%",
    color: "#FFF",
    textTransform: "none",
    backgroundColor: "#4285F4",
  },
  whiteButton: {
    width: "60%",
    color: "#4285F4",
    textTransform: "none",
    backgroundColor: "#FFF",
  },
  imageGrid: {
    height: "80vh",
    display: "grid",
    overflow: "none",
    placeItems: "center",
  },
  meetingImage: {
    width: "80%",
    borderRadius: 90,
  },
  imageText: {
    marginTop: 10,
    fontWeight: 700,
  },
})

export default function Meetings() {
  const classes = useStyles()

  const [openDialog, setOpenDialog] = useState<boolean>(false)

  return (
    <>
      <MeetingHeader />

      <Grid container justify="space-between" className={classes.buttonsGrid}>
        <Button
          size="small"
          variant="contained"
          className={classes.blueButton}
          onClick={() => setOpenDialog(true)}
        >
          New meeting
        </Button>

        <Button
          size="small"
          variant="contained"
          className={classes.whiteButton}
          onClick={() => setOpenDialog(true)}
        >
          Join with code
        </Button>
      </Grid>

      <Grid
        container
        spacing={3}
        direction="column"
        alignItems="center"
        className={classes.imageGrid}
      >
        <img
          src={MeetingImage}
          alt="Meeting"
          className={classes.meetingImage}
        />

        <Typography variant="h6" className={classes.imageText}>
          Oops.. There's nothing here for you!
        </Typography>
      </Grid>

      <DialogNotImplemented
        open={openDialog}
        close={() => setOpenDialog(false)}
      />
    </>
  )
}
