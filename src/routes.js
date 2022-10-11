import React from "react"

import { BrowserRouter, Switch, Route } from "react-router-dom"

import "@fontsource/roboto"
import { ThemeProvider } from "@material-ui/core/styles"

import {
  Container,
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from "@material-ui/core"

import MailList from "./pages/MailList"
import Meetings from "./pages/Meetings"
import InferiorMenu from "./components/InferiorMenu"

export default function Routes() {
  const theme = createMuiTheme({
    typography: {
      fontSize: 14,
      fontFamily: "Roboto",
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "@font-face": {
            fontWeight: 500,
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontDisplay: "swap",
          },
        },
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Container maxWidth="xs" style={{ backgroundColor: "#FFF" }}>
            <Route component={MailList} exact path="/" />
            <Route component={Meetings} path="/meetings" />
          </Container>
        </Switch>
        <InferiorMenu />
      </BrowserRouter>
    </ThemeProvider>
  )
}
