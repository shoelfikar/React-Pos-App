import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Register from '../page/Register'
import Login from '../page/Login'
import Home from '../page/Home'



function Routers(){
  return(
    <Router>
      <Switch>
        <Route exact render={props => <Home {...props} />} path="/home" />
        <Route exact render={props => <Login {...props} />} path="/" />
        <Route exact render={props => <Register {...props} />} path="/register" />
      </Switch>
    </Router>
  )
}

export default Routers