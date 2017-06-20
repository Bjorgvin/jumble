import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import createRoutes from './routes.js'

import reducers from './reducers'

import history from './history'

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


const routes = createRoutes(history)

ReactDOM.render(
  <Provider store={ store } >
    { routes }
  </Provider>,
  document.getElementById('root')
);
