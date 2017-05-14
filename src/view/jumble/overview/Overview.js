import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Overview extends Component {

  componentWillMount() {
    const { fetchJumbles } = this.props
    fetchJumbles()
  }

  render() {
    const { jumbles } = this.props
    if(jumbles) {
      if(jumbles.length > 0) {
        const jumblelist = jumbles.map(j => <Link key={j.id} to={`/jumble/${j.id}`}>{j.id}</Link>)
        return (
          <div>
            <h1>Jumbles</h1>
            {jumblelist}
          </div>);
      } else {
        return <div>You don't have any jumbles yet :)</div>
      }
    } else {
      return (<div>loading jumbles</div>)
    }
  }
}

export default Overview
