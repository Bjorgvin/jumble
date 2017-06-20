import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import createRoutes from './routes.js'
import createBrowserHistory from 'history/createBrowserHistory'

import reducers from './reducers'

import sagas from './sagas'
const sagaMiddleware = createSagaMiddleware()

const middleware = applyMiddleware(sagaMiddleware)
const composeEnhancers =
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(middleware)
)

sagaMiddleware.run(sagas)


const history = createBrowserHistory()
const routes = createRoutes(history)

ReactDOM.render(
  <Provider store={ store } >
    { routes }
  </Provider>,
  document.getElementById('root')
);
