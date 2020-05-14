import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as ServiceWorker from './serviceWorker'

const container = document.getElementById('root')
ReactDOM.render(<App />,container )


ServiceWorker.unregister()