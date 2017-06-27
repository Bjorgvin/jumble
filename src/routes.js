import React from 'react'
import { Router, Route, Redirect, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import jumble from './view/jumbles/routes'

export default function routes(history) {
  return (
    <Router history={history}>
      <div>
        <nav>
          <Link to="/jumbles/new">New</Link>
          <Link to="/jumbles">Jumbles</Link>
        </nav>
        <Switch>
          {jumble}
          <Route component={()=>(<Redirect to='/jumbles'/>)}/>
        </Switch>
      </div>
    </Router>
  )
}
