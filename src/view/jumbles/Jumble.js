import React, { Component } from 'react';
import clipboard from 'clipboard-js'

class Jumble extends Component {

  constructor(props) {
    super(props)
    this.copy = this.copy.bind(this)
  }

  copy(password) {
    clipboard.copy(password)
  }

  render() {
    const { name, jumble, first, second, third, fourth } = this.props
    let prefix
    let password
    let postfix
    if(first && second && third && fourth) {
      let begin = Number(first + second)
      let end = Number(third + fourth)
      const reverse = begin > end
      if(reverse){
        const tmp = end
        end = begin
        begin = tmp
      }
      prefix = jumble.slice(0,begin)
      password = jumble.slice(begin,end+1)
      password = reverse ? password.split('').reverse().join('') : password
      postfix = jumble.slice(end+1)
    }

    return (
      <div>
        {name && <div>name: {name}</div>}
        {password &&
          <div>
            <div>prefix: {prefix}</div>
            <div>password: <strong>{password}</strong></div>
            <div>postfix: {postfix}</div>
          </div>
        }
        {jumble && !password &&
          <div>Jumble: {jumble}</div>
        }
        {password && <input
          type='button'
          onClick={()=>this.copy(password)}
          value='copy'
       />}
      </div>
    )
  }
}

export default Jumble
