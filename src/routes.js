import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import '@fontsource/roboto'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import MailList from './pages/MailList'
import Meetings from './pages/Meetings'
import InferiorMenu from './components/InferiorMenu'

export default function Routes() {
  const theme = createMuiTheme({
    typography: {
      fontSize: 14,
      fontFamily: 'Roboto',
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': {
            fontWeight: 500,
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontDisplay: 'swap',
          },
        },
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route component={MailList} exact path="/" />
          <Route component={Meetings} path="/meetings" />
        </Switch>
        <InferiorMenu />
      </BrowserRouter>
    </ThemeProvider>
  )
}
