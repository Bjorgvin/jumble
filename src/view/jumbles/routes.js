import React from 'react'
import { Route } from 'react-router'

import Overview from './overview'
import Detail from './detail'

const root = 'jumbles'
export default (
  [
    <Route key='detail' path='/jumbles/:jumble' component={Detail} back={`/${root}/overview`} />,
    <Route key='overview' path='/jumbles' component={Overview} />
  ]
)
