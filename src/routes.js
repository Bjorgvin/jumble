import React from 'react'
import { Router, Route, Redirect, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import jumble , { root } from './view/jumbles/routes'

export default function routes(history) {
  return (
    <Router history={history}>
      <div>
        <nav>
          <Link to={`${root}/new`}>New</Link>
          <Link to={`${root}`}>Jumbles</Link>
        </nav>
        <Switch>
          {jumble}
          <Route component={()=>(<Redirect to={`${root}`}/>)}/>
        </Switch>
      </div>
    </Router>
  )
}
