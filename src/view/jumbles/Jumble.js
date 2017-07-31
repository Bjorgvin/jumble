import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import clipboard from 'clipboard-js'
import { ActionButton } from '../components/buttons.js'
import { Center, ActionPanel } from '../components/containers.js'
<<<<<<< HEAD
=======
import { media } from '../../style-utils'
>>>>>>> 00f2997a1e516c456a5469d47d53bff611061360

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

// default styling for all columns
const Td = styled.td`
  width: 25px;
  height: 25px;
<<<<<<< HEAD
=======
  ${media.handheld`
    width: 20px;
    height: 20px;
    font-size: 14px;
  `};
>>>>>>> 00f2997a1e516c456a5469d47d53bff611061360
  padding: 5px;
  animation: 0.5s ${fadeIn} ease-out;
`

// style for column marked by the second digit
const TdSecond = styled(Td)`
  background:${props => props.theme.yellow};
`
// style for column marked by the fourth digit
const TdFourth = styled(Td)`
  background:${props => props.theme.green};
`
// styling for rows
const Tr = styled.tr`
  background: white;
  animation: 0.5s ${fadeIn} ease-out;
`
// styling for row marked by the first digit
const TrFirst = styled(Tr)`
  background:${props => props.theme.yellow};
`
// styling for row marked by the third digit
const TrThird = styled(Tr)`
  background:${props => props.theme.green};
`

// the table holding the jumble
const JumbleTable = styled.table`
  border-collapse: collapse;
  background: #fefefa;
  text-align: center;
`
// a div holding the jumble name
const JumbleName = styled(Center)`
  font-weight: 400;
  font-size: 30px;
  margin: 10px 0 10px 0;
`

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
    if (first && second && third && fourth) {
      let begin = Number(`${first}${second}`)
      let end = Number(`${third}${fourth}`)
      const reverse = begin > end
      if (reverse) {
        const tmp = end
        end = begin
        begin = tmp
      }
      password = jumble.slice(begin, end + 1)
      password = reverse ? password.split('').reverse().join('') : password
    }

    const columnsHeaders = [<td key={`ch${0}`} />]

    for (var k = 0; k < 10; k++) {
      const key = `ch${k + 1}`
      const header =
        k === second
          ? <TdSecond key={key}>{`${k}`}</TdSecond>
          : k === fourth
            ? <TdFourth key={key}>{`${k}`}</TdFourth>
            : <Td key={key}>{`${k}`}</Td>
      columnsHeaders.push(header)
    }
    const columnsHeadersRow = (
      <tr>
        {columnsHeaders}
      </tr>
    )
    const rows = []
    for (var i = 0; i < 10; i++) {
      const chars = jumble.slice(i * 10, i * 10 + 10)
      const columns = [<Td key={`rc${i}`}>{`${i}`}</Td>]

      for (var j = 0; j < chars.length; j++) {
        if (first === i) {
          // this is a column for the first digit
          columns.push(<Td key={`c${j}`}>{`${chars[j]}`}</Td>)
        } else if (second === j) {
          // this is the row of the second digits
          columns.push(<TdSecond key={`c${j}`}>{`${chars[j]}`}</TdSecond>)
        } else if (third === i) {
          // this is a column of the third digit
          columns.push(<Td key={`c${j}`}>{`${chars[j]}`}</Td>)
        } else if (fourth === j) {
          // this is the row of the fourth digit
          columns.push(<TdFourth key={`c${j}`}>{`${chars[j]}`}</TdFourth>)
        } else {
          // none of the pin digits match
          columns.push(<Td key={`c${j}`}>{`${chars[j]}`}</Td>)
        }
      }
      const row =
        first === i
          ? <TrFirst key={`r${i}`}>
              {columns}
            </TrFirst>
          : third === i
            ? <TrThird key={`r${i}`}>
                {columns}
              </TrThird>
            : <Tr key={`r${i}`}>
                {columns}
              </Tr>
      rows.push(row)
    }

    return (
      <div>
        {name &&
          <JumbleName>
            {name}
          </JumbleName>}
        <Center>
          <JumbleTable>
            <tbody>
              {columnsHeadersRow}
              {rows}
            </tbody>
          </JumbleTable>
        </Center>
        {password &&
          <ActionPanel>
            <ActionButton
              type="button"
              onClick={() => this.copy(password)}
              value="Copy"
            />
          </ActionPanel>}
      </div>
    )
  }
}

export default Jumble
