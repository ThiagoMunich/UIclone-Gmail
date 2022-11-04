import React, { useEffect, useState } from "react"

import { Avatar, Fab, Grid, Typography } from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"

import StarIcon from "@material-ui/icons/Star"
import Checkbox from "@material-ui/core/Checkbox"
import EditOutlinedIcon from "@material-ui/icons/EditOutlined"
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined"

import Principal from "./components"
import { mailData } from "./mailData"
import OpenMail from "../../pages/OpenMail"
import DialogNotImplemented from "../DialogNotImplemented"

export interface SelectedMail {
  id: number
  avatarLetter: string
  avatarColor: string
  title: string
  content: string
  subContent: string
  time: string
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: 20,
  },
  mailTitle: {
    marginLeft: 10,
    fontWeight: 700,
  },
  mailContent: {
    marginLeft: 5,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  mailSubContent: {
    opacity: "75%",
    marginLeft: 5,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  checkbox: {
    margin: 0,
    padding: 0,
  },
  checked: {
    color: "#FFD700",
  },
  principalText: {
    padding: 3,
    fontSize: 15,
    opacity: "50%",
    fontWeight: 700,
  },
  fab: {
    margin: 20,
    bottom: 65,
    fontSize: 16,
    fontWeight: 700,
    color: "#de5246",
    position: "fixed",
    textTransform: "none",
    backgroundColor: "#FFF",
    justifyContent: "flex-end",
  },
  fabIcon: {
    marginRight: 8,
    color: "#de5246",
  },
}))

export default function Mails() {
  const classes = useStyles()

  const [openMail, setOpenMail] = useState<boolean>(false)

  const [openDialog, setOpenDialog] = useState<boolean>(false)

  const [selectedMail, setSelectedMail] = useState<SelectedMail>(
    {} as SelectedMail
  )

  const [writeButtonVariant, setWriteButtonVariant] = useState<
    undefined | "round" | "extended"
  >("extended")

  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset === 0) {
        setWriteButtonVariant("extended")
      } else {
        setWriteButtonVariant("round")
      }
    }
  })

  const handleOpenMail = (mail: SelectedMail) => {
    setSelectedMail(mail)
    setOpenMail(true)
  }

  return (
    <>
      <Typography variant="overline" className={classes.principalText}>
        Principal
      </Typography>
      <Principal />

      {mailData.map((mail) => (
        <Grid container key={mail.id} className={classes.root}>
          <Avatar
            onClick={() => handleOpenMail(mail)}
            style={{ backgroundColor: mail.avatarColor }}
          >
            {mail.avatarLetter}
          </Avatar>

          <Grid item container justify="space-between" sm={10} xs={10}>
            <Grid item onClick={() => handleOpenMail(mail)}>
              <Typography className={classes.mailTitle}>
                {mail.title}
              </Typography>
            </Grid>

            <Grid item>
              <Typography variant="caption">{mail.time}</Typography>
            </Grid>

            <Grid
              item
              sm={10}
              xs={10}
              className={classes.mailContent}
              onClick={() => handleOpenMail(mail)}
            >
              <Typography className={classes.mailContent} variant="body2">
                {mail.content}
              </Typography>
            </Grid>

            <Grid
              item
              sm={10}
              xs={10}
              className={classes.mailSubContent}
              onClick={() => handleOpenMail(mail)}
            >
              <Typography className={classes.mailSubContent} variant="caption">
                {mail.subContent}
              </Typography>
            </Grid>

            <Grid item>
              <Checkbox
                className={classes.checkbox}
                icon={<StarBorderOutlinedIcon fontSize="small" />}
                checkedIcon={
                  <StarIcon fontSize="small" className={classes.checked} />
                }
              />
            </Grid>
          </Grid>
        </Grid>
      ))}

      <Grid container justify="flex-end" onClick={() => setOpenDialog(true)}>
        <Fab variant={writeButtonVariant} size="medium" className={classes.fab}>
          <EditOutlinedIcon className={classes.fabIcon} />
          {writeButtonVariant === "extended" ? "Write" : " "}
        </Fab>
      </Grid>

      <DialogNotImplemented
        open={openDialog}
        close={() => setOpenDialog(false)}
      />

      <OpenMail
        open={openMail}
        close={() => setOpenMail(false)}
        mail={selectedMail}
      />
    </>
  )
}
