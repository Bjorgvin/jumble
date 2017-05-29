import React from 'react'
import { Route } from 'react-router'

import Overview from './overview'
import Detail from './detail'
import New from './new'

const root = 'jumble'
export default (
  [
    <Route key='new' path='/jumble/new' component={New} back={`/${root}/overview`} />,
    <Route key='detail' path='/jumble/:jumble' component={Detail} back={`/${root}/overview`} />,
    <Route key='overview' path='/jumble' component={Overview} />
  ]
)
