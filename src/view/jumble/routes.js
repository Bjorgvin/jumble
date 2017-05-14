import React from 'react'
import { Route } from 'react-router'

import Overview from './overview'
import Detail from './detail'

const root = 'jumble'
export default (
  [
    <Route key='detail' path='/jumble/:jumble' component={Detail} back={`/${root}/overview`} />,
    <Route key='overview' path='/jumble' component={Overview} />
  ]
)
