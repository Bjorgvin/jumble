import React from 'react'
import { Router, Route, Redirect, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import home from './view/home/routes'
import jumble from './view/jumble/routes'

export default function routes(history) {
  return (
    <Router history={history}>
      <div>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/jumble">Jumbles</Link>
        </nav>
        <Switch>
          {home}
          {jumble}
          <Route component={()=>(<Redirect to='/home'/>)}/>
        </Switch>
      </div>
    </Router>
  )
}
