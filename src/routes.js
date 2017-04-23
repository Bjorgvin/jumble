import React from 'react'
import { Router, Route, Redirect } from 'react-router'
import home from './view/home/routes'

export default function routes(history) {
  return (
    <Router history={history}>
      <div>
        <Route path='/' render={()=>(<Redirect to="/home"/>)} />
        {home}
      </div>
    </Router>
  )
}
