import { combineReducers } from 'redux'

import newsReducer from './newsReducer'
import sourceReducer from './sourceReducer'

export default combineReducers({
    news: newsReducer,
    source: sourceReducer
})