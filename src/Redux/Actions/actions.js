export const GET_TOP_MOVIES_SUCCESS = 'GET_TOP_MOVIES_SUCCESS';
export const GET_GENRES_SUCCESS = 'GET_GENRES_SUCCESS';
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const TOGGLE_FETCHING_TYPE = 'TOGGLE_FETCHING_TYPE';
export const GET_CURRENT_FILM_SUCCESS = 'GET_CURRENT_FILM_SUCCESS';

const axios = require('axios');

const getTopMoviesSuccess = (newValue) => {
    return {
        type: GET_TOP_MOVIES_SUCCESS,
        payload: newValue
    }
}

export const getTopMovies = (url) => {
    return dispatch => {
        axios.get(url).then(resp => {
            setTimeout(() => {
                dispatch(toggleFetchingType(false));
                dispatch(getTopMoviesSuccess(resp.data.results));
            }, 1500);
        });
    }
}

const getGenresSuccess = (newValue) => {
    return {
        type: GET_GENRES_SUCCESS,
        payload: newValue
    }
}

export const getGenres = (url) => {
    return dispatch => {
        axios.get(url).then(resp => {
            setTimeout(() => {
                dispatch(getGenresSuccess(resp.data.genres));
            }, 1500);
        });
    }
}

export const changeInput = (newValue) => {
    return {
        type: CHANGE_INPUT,
        payload: newValue
    }
}

const toggleFetchingType = (newValue) => {
    return {
        type: TOGGLE_FETCHING_TYPE,
        payload: newValue
    }
}

const getCurrentFilmSuccess = (newValue)=>{
    return{
        type:GET_CURRENT_FILM_SUCCESS,
        payload:newValue
    }
}

export const getCurrentFilm = (url)=>{
    return dispatch => {
        axios.get(url).then(resp => dispatch(getCurrentFilmSuccess(resp.data)));
    }
}