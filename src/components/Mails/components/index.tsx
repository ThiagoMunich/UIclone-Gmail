import React from "react"

import { Chip, Grid, Typography } from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"

import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "95%",
    marginTop: 10,
    marginLeft: 10,
  },
  socialTitle: {
    marginLeft: 15,
    fontWeight: 700,
  },
  socialSubContent: {
    opacity: "75%",
    marginLeft: 8,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  iconColor: {
    color: "#4285F4",
  },
  chipColor: {
    color: "#FFF",
    backgroundColor: "#4285F4",
  },
}))

export default function Principal() {
  const classes = useStyles()

  return (
    <Grid container className={classes.root}>
      <PeopleAltOutlinedIcon className={classes.iconColor} />

      <Grid item container justify="space-between" sm={11} xs={11}>
        <Grid item sm={8} xs={8}>
          <Typography className={classes.socialTitle}>Social</Typography>
        </Grid>

        <Grid item>
          <Chip label="99+ newer" size="small" className={classes.chipColor} />
        </Grid>

        <Grid item className={classes.socialSubContent} sm={12} xs={12}>
          <Typography className={classes.socialSubContent} variant="caption">
            Github, LinkedIn, Instagram...
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
