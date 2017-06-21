import * as actionType from '../actions/constant'

const initialState = {
    newsList: []
}

const getDataNews = (state, data) => {
    let newState = {
        ...state,
        newsList: data
    }
    return newState
}

const newsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case actionType.GET_DATA_NEWS:
            return getDataNews(state, payload)
        default:
            return state
    }
}

export default newsReducer