import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import "@fontsource/roboto"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { ThemeProvider } from "@material-ui/core/styles"
import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core"

import MailList from "./pages/MailList"
import Meetings from "./pages/Meetings"
import InferiorMenu from "./components/InferiorMenu"
import InvalidScreenSize from "./pages/InvalidScreenSize"

export default function Routes() {
  var mobile = useMediaQuery("(min-width:600px)")

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
        {!mobile ? (
          <>
            <Switch>
              <Route component={MailList} exact path="/" />
              <Route component={Meetings} path="/meetings" />
            </Switch>
            <InferiorMenu />
          </>
        ) : (
          <Switch>
            <Route component={InvalidScreenSize} path="/" />
          </Switch>
        )}
      </BrowserRouter>
    </ThemeProvider>
  )
}
