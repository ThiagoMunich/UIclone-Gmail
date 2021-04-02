import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import travolta from '../../assets/images/travolta.gif'

export default function Meetings() {
  return (
    <Grid container justify="center" style={{ marginTop: 50 }}>
      <Typography variant="h5">There's nothing here for you!</Typography>
      <img src={travolta} alt="travolta gif" style={{ width: '80%', marginTop: 20 }} />
    </Grid>
  )
}
