import { fork } from 'redux-saga/effects'
import jumbles from './jumbles/sagas'

export default function* () {
  yield fork(jumbles)
}
