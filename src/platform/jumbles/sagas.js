import { put, fork, call, takeEvery, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { getJumbles } from './reducer'
import history from '../../history'

import {
  fetchJumblesResolved,
  saveJumbleResolved,
  type,
} from './actions'

let jumbleList = []
if(localStorage) {
  const storageJumbles = localStorage.getItem('jumbles')
  if(storageJumbles)
    jumbleList = JSON.parse(storageJumbles)
}


export function* onFetchJumbles() {
  const jumbles = yield select(getJumbles)
  if (!(jumbles && jumbles.size > 0)) {
    yield call(delay, 1000)
    yield put(fetchJumblesResolved(jumbleList))
  }
}

export function* onSaveJumble(action) {
  // fake some time
  yield call(delay, 5000, true)
  const newId = `${jumbleList.length}`
  // save the jumble
  jumbleList.push({
    id: newId,
    name: action.payload.name,
    jumble: action.payload.jumble,
  })
  if(localStorage) localStorage.setItem('jumbles', JSON.stringify(jumbleList));
  yield put(saveJumbleResolved(newId))
  yield call(history.push, `/jumble/${newId}`)
}

export default function* () {
  yield fork(function* watchFetchJumbles() {
    yield takeEvery(type.fetchJumbles, onFetchJumbles)
  })
  yield fork(function* watchSaveJumble() {
    yield takeEvery(type.saveJumble, onSaveJumble)
  })
}
