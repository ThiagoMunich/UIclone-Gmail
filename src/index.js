import React from "react"
import ReactDOM from "react-dom"
import * as serviceWorkerRegistration from "./serviceWorkerRegistration"

import "./index.css"
import Routes from "./routes"

ReactDOM.render(<Routes />, document.getElementById("root"))

serviceWorkerRegistration.register()
