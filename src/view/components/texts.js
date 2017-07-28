import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const HeaderText = styled.h1`
  font-size: 30px;
  text-align: center;
  animation: 2s ${fadeIn} ease-out;
`
