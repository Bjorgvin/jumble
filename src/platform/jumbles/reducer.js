import { type } from './actions'

const initialState = {
  jumbles: undefined,
  deleting: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case type.fetchJumblesResolved:
      return Object.assign({},
        state,
        { jumbles: action.payload.jumbles }
      )
    case type.saveJumble:
      return Object.assign({},
        state,
        { saving: true }
      )
    case type.saveJumbleResolved:
      return Object.assign({},
        state,
        { saving: false }
      )
    case type.deleteJumble:
      const deleting = [...state.deleting, action.payload.id]
      return Object.assign({},
        state,
        { deleting: deleting }
      )
    case type.deleteJumbleResolved:
      const id = action.payload.id
      const jumbleList = state.jumbles.filter(item=>item.id!==id)
      const newDeleting = state.deleting.filter(anId=>anId!==id)
      return Object.assign({},
          state,
          {jumbles: jumbleList},
          {deleting: newDeleting}
        )
    default:
      return state
  }
}

const select = state => state.platform.jumbles

// selectors
export const deletingJumbles = (state) => select(state).deleting
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
