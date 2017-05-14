import { combineReducers } from 'redux'
import home from './home/reducer'
import jumbles from './jumbles/reducer'

export default combineReducers({
  home,
  jumbles,
})
