import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { root } from '../routes'
import { ActionButton } from '../../components/buttons.js'
import { ListPair, TextPanel } from '../../components/containers.js'
import { HeaderText } from '../../components/texts.js'

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
                value="Delete"
                disabled={deletingItem}
              />
            </ListPair>
          )
        })
        return (
          <TextPanel>
            <HeaderText>Jumbles</HeaderText>
            {jumblelist}
          </TextPanel>
        )
      } else {
        return (
          <TextPanel>
            <HeaderText>
              <p>You don't have any jumbles yet :)</p>
              <Link to={`${root}/new`}>Add a jumble</Link>
            </HeaderText>
          </TextPanel>
        )
      }
    } else {
      return (
        <TextPanel>
          <HeaderText>loading jumbles</HeaderText>
        </TextPanel>
      )
    }
  }
}

export default Overview
