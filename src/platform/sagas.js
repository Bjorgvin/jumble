import { fork } from 'redux-saga/effects'
import home from './home/sagas'

export default function* () {
  yield fork(home)
}
