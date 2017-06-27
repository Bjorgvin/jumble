import React from 'react'
import { Route } from 'react-router'

import Overview from './overview'
import Detail from './detail'
import New from './new'

const root = 'jumbles'
export default (
  [
    <Route key='new' path={`/${root}/new`} component={New} back={`/${root}/overview`} />,
    <Route key='detail' path={`/${root}/:jumble`} component={Detail} back={`/${root}/overview`} />,
    <Route key='overview' path={`/${root}`} component={Overview} />
  ]
)
