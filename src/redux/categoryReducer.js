import * as types from './actionTypes'

const initialState = {
    loading: false,
    categories: [],
    error: null
}

const categoryReducer = (state=initialState, action) => {
    switch(action.type) {
        case types.FETCH_CATEGORIES: 
            return {
                ...state,
                loading: true
            }
        case types.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.payload
            }
        case types.FETCH_CATEGORIES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: 
            return state;
    }
}

export default categoryReducer
