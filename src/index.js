import React from 'react'
import ReactDOM from 'react-dom'
import styled, { ThemeProvider } from 'styled-components'
import normalize from './styles/global.js'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createRoutes from './routes.js'

import reducers from './reducers'

import history from './history'

import sagas from './sagas'
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
)

sagaMiddleware.run(sagas)

const routes = createRoutes(history)

// set up the normalize
normalize()

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 35px;
  font-size: 18px;
  font-family: 'Overpass', sans-serif;
`
const AppContent = styled.div`max-width: 400px;`

const theme = {
  green: '#B3D56C',
  yellow: '#E4D373',
}

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <AppContainer>
        <AppContent>
          {routes}
        </AppContent>
      </AppContainer>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
)
