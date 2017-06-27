import React, { Component } from 'react';
import clipboard from 'clipboard-js'
import './jumble.css'

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
      const cname = k===second?'selected-first':k===fourth?'selected-second ':''
      columnsHeaders.push(
        <td className={cname} key={`ch${k+1}`}>{k===second?`${k}`:k===fourth?`${k}`:k}</td>
      )
    }
    const columnsHeadersRow = (<tr>{columnsHeaders}</tr>)
    const rows = []
    for (var i = 0; i < 10; i++) {
      const chars = jumble.slice(i*10,(i*10)+10)
      const columns = [
        <td key={`rc${i}`}>{i===first?`${i}`:i===third?`${i}`:i}</td>
      ]
      for (var j = 0; j < chars.length; j++) {

        if(first===i) {
          // this is one of the first digits
          columns.push(
            <td className='selected-first' key={`c${j}`}>{`${chars[j]}`}</td>
          )
        } else if(third===i){
          // this is one of the third digits
          columns.push(
            <td className='selected-second' key={`c${j}`}>{`${chars[j]}`}</td>
          )
        } else if(second===j) {
          // this is one of the second digits
          columns.push(
            <td className='selected-first' key={`c${j}`}>{`${chars[j]}`}</td>
          )
        } else if(fourth===j) {
          // this is one of the fourth digits
          columns.push(
            <td className='selected-second' key={`c${j}`}>{`${chars[j]}`}</td>
          )
        } else {
          // none of the pin digits match
          columns.push(
            <td key={`c${j}`}>{`${chars[j]}`}</td>
          )
        }
      }
      const cname = first===i?'selected-first':(third===i?'selected-second':'')
      rows.push(<tr className={cname} key={`r${i}`}>{columns}</tr>)
    }

    return (
      <div>
        {name && <div className='jumble-name center'>{name}</div>}
        <div className='center'>
          <table className='jumble-table'>
            <tbody>
              {columnsHeadersRow}
              {rows}
            </tbody>
          </table>
        </div>
        {password &&
          <div className='action-panel'>
            <input
              className='action-button'
              type='button'
              onClick={()=>this.copy(password)}
              value='copy'
            />
          </div>
        }
      </div>
    )
  }
}

export default Jumble
