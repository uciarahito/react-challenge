import * as actionType from '../actions/constant'

const initialState = {
    sourceList: [],
    loading: false
}

const getDataStart = (state) => {
    let newState = {
        ...state,
        loading: true
    }
    return newState
}

const getDataSources = (state, data) => {
    let newState = {
        ...state,
        sourceList: data,
        loading: false
    }
    return newState
}

const sourceReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case actionType.GET_DATA_START:
            return getDataStart(state)
        case actionType.GET_DATA_SOURCES:
            return getDataSources(state, payload)
        default:
            return state
    }
}

export default sourceReducer