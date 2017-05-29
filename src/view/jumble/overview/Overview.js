import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Overview extends Component {

  componentWillMount() {
    const { fetchJumbles } = this.props
    fetchJumbles()
  }

  render() {
    const { jumbles, deleteJumble, deleting } = this.props
    if(jumbles) {
      if(jumbles.length > 0) {
        const jumblelist = jumbles.map(j => {
          const delThis = deleting.indexOf(j.id) >= 0
          return (
              <div key={j.id}>
                {delThis && <span>{j.name}</span>}
                {!delThis && <Link to={`/jumble/${j.id}`}>{j.name}</Link> }
                <input
                  type='button'
                  onClick={() => deleteJumble(j.id)}
                  value='delete'
                  disabled={deleting.indexOf(j.id) >= 0}
                />
              </div>
            )
          }
        )
        return (
          <div>
            <h1>Jumbles</h1>
            {jumblelist}
          </div>);
      } else {
        return (
          <div>
            <p>You don't have any jumbles yet :)</p>
            <Link to='/jumble/new'>Add a jumble</Link>
          </div>)
      }
    } else {
      return (<div>loading jumbles</div>)
    }
  }
}

export default Overview
