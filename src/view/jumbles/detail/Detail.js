import React, { Component } from 'react';
import Jumble from '../Jumble'
import Pin from './Pin'

class Detail extends Component {

  constructor(props) {
    super(props)
    this.state = {first: -1,second: -1,third: -1,fourth: -1}
    this.onPinChange = this.onPinChange.bind(this)
  }

  componentWillMount() {
    const { fetchJumbles } = this.props
    fetchJumbles()
  }

  onPinChange(first, second, third, fourth) {
    this.setState({
      first: first,
      second: second,
      third: third,
      fourth: fourth,
    })
  }

  render() {
    const { match, getJumble } = this.props
    const jumbleId = match.params.jumble
    const jumble = getJumble(jumbleId)
    if(jumble) {
      return (
        <div>
          <Pin onPinChange={this.onPinChange} />
          <Jumble
            name={jumble.name}
            jumble={jumble.jumble}
            first={this.state.first}
            second={this.state.second}
            third={this.state.third}
            fourth={this.state.fourth}
          />
        </div>
      )
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
