import * as actionType from './constant'

import axios from 'axios'

export const getDataStart = () => {
    return {
        type: actionType.GET_DATA_START
    }
}

export const getDataSources = (data) => {
    return {
        type: actionType.GET_DATA_SOURCES,
        payload: data
    }
}

export const getDataNews = (data) => {
    return {
        type: actionType.GET_DATA_NEWS,
        payload: data
    }
}

export const getAllSources = () => {
    return (dispatch) => {
        dispatch(getDataStart())

        // NOTE: Get All Sources News
        axios.get(`https://newsapi.org/v1/sources?languange=en`)
        .then(response => {
            // console.log('1111111', response.data)
            dispatch(getDataSources(response.data.sources))
        })
        .catch(error => {
            console.log(`oops, something error: ${error}`);
        })
    }
}

export const getAllNews = (source) => {
    return (dispatch) => {
        // dispatch(getDataStart())

        // NOTE: List News Article Based on Source News
        axios.get(`https://newsapi.org/v1/articles?source=${source}&apiKey=8b8441d3403c4f73896ea3b0e039595b`)
        .then(response => {
            // console.log('2222222', response.data);
            dispatch(getDataNews(response.data))
        })
        .catch(error => {
            console.log(`oops, something error: ${error}`);
        })
    }
}