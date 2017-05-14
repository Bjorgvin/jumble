import { fork } from 'redux-saga/effects'
import home from './home/sagas'
import jumbles from './jumbles/sagas'

export default function* () {
  yield fork(home)
  yield fork(jumbles)
}
