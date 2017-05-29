import { combineReducers } from 'redux'
import platform from './platform/reducers'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  platform,
  form: formReducer // redux-form reducer
})
