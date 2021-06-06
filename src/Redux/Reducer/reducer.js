import { GET_TOP_MOVIES_SUCCESS, GET_GENRES_SUCCESS, CHANGE_INPUT, TOGGLE_FETCHING_TYPE, GET_CURRENT_FILM_SUCCESS } from '../Actions/actions';

let initialState = {
    films: [],
    genres: [],
    input: '',
    isFetching: true,
    currFilm: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TOP_MOVIES_SUCCESS:
            return {
                ...state,
                films: [...state.films, ...action.payload]
            }
        case GET_GENRES_SUCCESS:
            return {
                ...state,
                genres: [...state.genres, ...action.payload]
            }
        case CHANGE_INPUT:
            return {
                ...state,
                input: action.payload
            }
        case TOGGLE_FETCHING_TYPE:
            return {
                ...state,
                isFetching: action.payload
            }
        case GET_CURRENT_FILM_SUCCESS:
            return {
                ...state,
                currFilm: action.payload
            }
        default: return state;
    }
}