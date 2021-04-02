import React from 'react'

import { Avatar, Grid, Typography } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

import Checkbox from '@material-ui/core/Checkbox'
import StarIcon from '@material-ui/icons/Star'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'

import { mailData } from './mailData'
import Principal from './components'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // height: 50,
    marginTop: 20,
  },
  mailTitle: {
    fontWeight: 700,
    marginLeft: 10,
  },
  mailContent: {
    marginLeft: 5,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  mailSubContent: {
    marginLeft: 5,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    opacity: '75%',
  },
  checkbox: {
    margin: 0,
    padding: 0,
  },
  checked: {
    color: '#FFD700',
  },
  principalText: {
    fontWeight: 700,
    fontSize: 15,
    padding: 3,
    opacity: '50%',
  },
}))

export default function Mails() {
  const classes = useStyles()

  return (
    <>
      <Typography variant="overline" className={classes.principalText}>
        Principal
      </Typography>
      <Principal />

      {mailData.map((mail) => (
        <Grid container key={mail.id} className={classes.root}>
          <Avatar style={{ backgroundColor: mail.avatarColor }}>{mail.avatarLetter}</Avatar>
          <Grid item container justify="space-between" sm={10} xs={10}>
            <Grid item>
              <Typography className={classes.mailTitle}>{mail.title}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption">{mail.time}</Typography>
            </Grid>
            <Grid item className={classes.mailContent} sm={10} xs={10}>
              <Typography className={classes.mailContent} variant="body2">
                {mail.content}
              </Typography>
            </Grid>
            <Grid item className={classes.mailSubContent} sm={10} xs={10}>
              <Typography className={classes.mailSubContent} variant="caption">
                {mail.subContent}
              </Typography>
            </Grid>
            <Grid item>
              <Checkbox
                className={classes.checkbox}
                icon={<StarBorderOutlinedIcon fontSize="small" />}
                checkedIcon={<StarIcon fontSize="small" className={classes.checked} />}
              />
            </Grid>
          </Grid>
        </Grid>
      ))}
    </>
  )
}
