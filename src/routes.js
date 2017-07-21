import React from 'react'
import { Router, Route, Redirect, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { darken } from 'polished'
import jumble, { root } from './view/jumbles/routes'

export default function routes(history) {
  const Navigation = styled.nav`
    top: 0;
    left: 0;
    width: 100%;
    height: 30px;
    position: fixed;
    display: flex;
    align-items: center;
    background-color: ${props => darken(0.3, props.theme.green)};
  `
  const StyledLink = styled(Link)`
    padding: 0px 0px 0px 15px;
    color: white;
    text-decoration: none;
  `
  return (
    <Router history={history}>
      <div>
        <Navigation>
          <StyledLink to={`${root}/new`}>New</StyledLink>
          <StyledLink to={`${root}`}>Jumbles</StyledLink>
        </Navigation>
        <Switch>
          {jumble}
          <Route component={() => <Redirect to={`${root}`} />} />
        </Switch>
      </div>
    </Router>
  )
}
