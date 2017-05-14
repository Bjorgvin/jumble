import { put, fork, call, takeEvery, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { getJumbles } from './reducer'

import {
  fetchJumblesResolved,
  type,
} from './actions'

export function* onFetchJumbles() {
  const jumbles = yield select(getJumbles)
  if (!(jumbles && jumbles.size > 0)) {
    yield call(delay, 1000)
    yield put(fetchJumblesResolved([
      {id:'jumble1',jumble:'some-smart-characters'},
      {id:'jumble2',jumble:'some-other-characters'},
    ]))
  }
}

export default function* () {
  yield fork(function* watchFetchJumbles() {
    yield takeEvery(type.fetchJumbles, onFetchJumbles)
  })
}
