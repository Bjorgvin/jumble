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

    let password
    if(first && second && third && fourth) {
      let begin = Number(`${first}${second}`)
      let end = Number(`${third}${fourth}`)
      const reverse = begin > end
      if(reverse){
        const tmp = end
        end = begin
        begin = tmp
      }
      password = jumble.slice(begin,end+1)
      password = reverse ? password.split('').reverse().join('') : password
    }

    const columnsHeaders = [(<td key={`ch${0}`}></td>)]
    for (var k = 0; k < 10; k++) {
      columnsHeaders.push(
        <td key={`ch${k+1}`}>{k===second?`s(${k})`:k===fourth?`f(${k})`:k}</td>
      )
    }
    const columnsHeadersRow = (<tr>{columnsHeaders}</tr>)
    const rows = []
    for (var i = 0; i < 10; i++) {
      const chars = jumble.slice(i*10,(i*10)+10)
      const columns = [
        <td key={`rc${i}`}>{i===first?`f(${i})`:i===third?`t(${i})`:i}</td>
      ]
      for (var j = 0; j < chars.length; j++) {
        if(first===i) {
          // this is one of the first digits
          columns.push(
            <td key={`c${j}`}>{`f(${chars[j]})`}</td>
          )
        } else if(third===i){
          // this is one of the third digits
          columns.push(
            <td key={`c${j}`}>{`t(${chars[j]})`}</td>
          )
        } else if(second===j) {
          // this is one of the second digits
          columns.push(
            <td key={`c${j}`}>{`s(${chars[j]})`}</td>
          )
        } else if(fourth===j) {
          // this is one of the fourth digits
          columns.push(
            <td key={`c${j}`}>{`f(${chars[j]})`}</td>
          )
        } else {
          // none of the pin digits match
          columns.push(
            <td key={`c${j}`}>{`${chars[j]}`}</td>
          )
        }
      }
      const style = first===i?{background:'blue'}:(third===i?{background:'red'}:{background:'white'})
      rows.push(<tr style={style} key={`r${i}`}>{columns}</tr>)
    }

    return (
      <div>
        <p>{name}</p>
        <table>
          <tbody>
            {columnsHeadersRow}
            {rows}
          </tbody>
        </table>
        {password &&
          <input
            type='button'
            onClick={()=>this.copy(password)}
            value='copy'
          />
        }
      </div>
    )
  }
}

export default Jumble
