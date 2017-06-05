import React, { Component } from 'react';
import Jumble from '../Jumble'

class Detail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pin:'',
      first: -1,
      second: -1,
      third: -1,
      fourth: -1,
    };
    this.pinChange = this.pinChange.bind(this)
  }

  componentWillMount() {
    const { fetchJumbles } = this.props
    fetchJumbles()
  }

  pinChange(event) {
    let pin = event.target.value
    if(!isNaN(pin)) {
      pin = pin.slice(0,4)
      const first = pin.slice(0,1)
      const second = pin.slice(1,2)
      const third =  pin.slice(2,3)
      const fourth = pin.slice(3,4)
      this.setState({
        pin:pin,
        first: first===''?-1:Number(first),
        second: second===''?-1:Number(second),
        third: third===''?-1:Number(third),
        fourth: fourth===''?-1:Number(fourth),
      })
    }
  }

  render() {
    const { match, getJumble } = this.props
    const jumbleId = match.params.jumble
    const jumble = getJumble(jumbleId)
    if(jumble) {
      return (
        <div>
          <div>
            pin selector
            <input
              type='text'
              value={this.state.pin}
              onChange={this.pinChange}
            />
          </div>
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
