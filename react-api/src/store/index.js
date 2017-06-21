import {
    createStore,
    applyMiddleware,
    compose 
} from 'redux'

import logger from 'redux-logger'

import thunk from 'redux-thunk'

import rootReducers from '../reducers'

const middlewares = applyMiddleware(logger, thunk)

const store = createStore(
    rootReducers,
    compose(
    middlewares,
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

export default store