import { type, toggleResolved } from './actions'
import { put, fork, takeEvery } from 'redux-saga/effects'

export function* onToggle(action) {
  // flip the text
  const text = action.payload.welcomeText === 'Welcome text 2'
                                            ? 'Welcome text 1'
                                            : 'Welcome text 2'
  // dispatch the resolved action
  yield put(toggleResolved(text))
}

export default function* () {
  yield fork(function* watchToggle() {
    yield takeEvery(type.toggle, onToggle)
  })
}
