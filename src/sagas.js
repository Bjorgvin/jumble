import { fork } from 'redux-saga/effects'
import platform from './platform/sagas'

export default function* () {
  yield fork(platform)
}
