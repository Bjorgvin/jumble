import React, { Component } from 'react'
import styled from 'styled-components'
import { Center } from '../../components/containers.js'

const Input = styled.input`
  order: 2;
  text-align: center;
  font-family: inherit;
  font-size: inherit;
`
const Container = styled(Center)`
  width: 100%;
`

class Pin extends Component {
  constructor(props) {
    super(props)
    this.state = { pin: '' }
    this.change = this.change.bind(this)
  }

  change(event) {
    const { onPinChange } = this.props

    let pin = event.target.value
    if (!isNaN(pin)) {
      pin = pin.slice(0, 4)
      const first = pin.slice(0, 1)
      const second = pin.slice(1, 2)
      const third = pin.slice(2, 3)
      const fourth = pin.slice(3, 4)
      this.setState({ pin: pin })
      onPinChange(
        first === '' ? -1 : Number(first),
        second === '' ? -1 : Number(second),
        third === '' ? -1 : Number(third),
        fourth === '' ? -1 : Number(fourth),
      )
    }
  }
  render() {
    return (
      <Container>
        <Input
          type="text"
          value={this.state.pin}
          onChange={this.change}
          placeholder="Pin"
        />
      </Container>
    )
  }
}

export default Pin
