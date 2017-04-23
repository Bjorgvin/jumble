import { type } from './actions'

const initialState = {
  welcomeText: 'Some initial text'
}

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.toggleResolved:
      return { welcomeText: action.payload.welcomeText }
    default:
      return state
  }
}

const select = state => state.platform.home
export const getWelcomeText = state => select(state).welcomeText

export default myReducer
