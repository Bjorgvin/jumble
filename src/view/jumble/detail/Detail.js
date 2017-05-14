import React, { Component } from 'react';

class Detail extends Component {

  componentWillMount() {
    const { fetchJumbles } = this.props
    fetchJumbles()
  }

  render() {
    const { match, getJumble } = this.props
    const jumbleId = match.params.jumble
    const jumble = getJumble(jumbleId)
    if(jumble) {
      return (<div>{jumble.id} : {jumble.jumble}</div>)
    } else {
      if(jumble === undefined) {
        return (<div>loading jumble {jumbleId}</div>)
      } else if(jumble === null) {
        return (<div>Jumble {jumbleId} does not exist</div>)
      }
    }
  }
}

export default Detail
