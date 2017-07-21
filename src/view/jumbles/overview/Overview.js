import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { root } from '../routes'
import { ActionButton } from '../components/buttons.js'
import { ListPair } from '../components/containers.js'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Panel = styled.div`
  text-align: cneter;
  width: 400px;
`

const HeaderText = styled.h1`
  font-size: 30px;
  text-align: center;
  animation: 2s ${fadeIn} ease-out;
`

class Overview extends Component {
  componentWillMount() {
    const { fetchJumbles } = this.props
    fetchJumbles()
  }

  render() {
    const { jumbles, deleteJumble, deleting } = this.props
    if (jumbles) {
      if (jumbles.length > 0) {
        const jumblelist = jumbles.map(j => {
          const deletingItem = deleting.indexOf(j.id) >= 0
          const item = deletingItem
            ? <span>
                {j.name}
              </span>
            : <Link to={`${root}/${j.id}`}>
                {j.name}
              </Link>

          return (
            <ListPair key={j.id}>
              {item}
              <ActionButton
                type="button"
                onClick={() => deleteJumble(j.id)}
                value="delete"
                disabled={deletingItem}
              />
            </ListPair>
          )
        })
        return (
          <Panel>
            <HeaderText>Jumbles</HeaderText>
            {jumblelist}
          </Panel>
        )
      } else {
        return (
          <Panel>
            <HeaderText>
              <p>You don't have any jumbles yet :)</p>
              <Link to={`${root}/new`}>Add a jumble</Link>
            </HeaderText>
          </Panel>
        )
      }
    } else {
      return (
        <Panel>
          <HeaderText>loading jumbles</HeaderText>
        </Panel>
      )
    }
  }
}

export default Overview
