import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorkerRegistration.register()
