import styled from 'styled-components'

export const Center = styled.div`
  display: flex;
  justify-content: center;
`
export const ListPanel = styled(Center)`
  display: flex;
  flex-direction: column;
`

export const ListPair = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
`
// panel holding action buttons
export const ActionPanel = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 15px;
`
