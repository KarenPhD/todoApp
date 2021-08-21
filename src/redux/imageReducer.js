import * as types from './actionTypes'

const initialState = {
    loading: false,
    images: [],
    error: null
}

const categoryReducer = (state=initialState, action) => {
    switch(action.type) {
        case types.FETCH_IMAGES: 
            return {
                ...state,
                loading: true
            }
        case types.FETCH_IMAGES_SUCCESS:
            return {
                ...state,
                loading: false,
                images: action.payload
            }
        case types.FETCH_IMAGES_ERROR:
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