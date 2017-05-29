import { type } from './actions'

const initialState = {
  jumbles: undefined,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case type.fetchJumblesResolved:
      return { jumbles: action.payload.jumbles }
    case type.saveJumble:
      return Object.assign({}, state, {
        saving: true,
      })
    case type.saveJumbleResolved:
      return Object.assign({}, state, {
        saving: false,
      })
    default:
      return state
  }
}

const select = state => state.platform.jumbles

// selectors
export const savingJumble = state => select(state).saving
export const getJumbles = state => select(state).jumbles
export const getJumble = (state,id) => {
  const jumbles = getJumbles(state)
  if(jumbles) {
    // jumbles have been fetched
    const jumble = jumbles.find(j=>j.id===id)
    // null is not found
    return (jumble)?jumble:null
  }
  // undefined means we have not loaded jumbles yet
  return undefined
}
