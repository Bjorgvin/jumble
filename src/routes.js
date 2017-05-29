import React from 'react'
import { Router, Route, Redirect, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import jumble from './view/jumble/routes'

export default function routes(history) {
  return (
    <Router history={history}>
      <div>
        <nav>
          <Link to="/jumble/new">New</Link>
          <Link to="/jumble">Jumbles</Link>
        </nav>
        <Switch>
          {jumble}
          <Route component={()=>(<Redirect to='/jumble'/>)}/>
        </Switch>
      </div>
    </Router>
  )
}
