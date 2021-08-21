import * as types from './actionTypes'

export const fetchCategoriesPending = () => ({
    type: types.FETCH_CATEGORIES
})

export const fetchCategoriesSuccess = (category) => ({
    type: types.FETCH_CATEGORIES_SUCCESS,
    payload: category
})

export const fetchCategoriesError = (error) => ({
    type: types.FETCH_CATEGORIES_ERROR,
    payload: error
})

export const fetchImagesPending = () => ({
    type: types.FETCH_IMAGES
})

export const fetchImagesSuccess = (image) => ({
    type: types.FETCH_IMAGES_SUCCESS,
    payload: image
})

export const fetchImagesError = (error) => ({
    type: types.FETCH_IMAGES_ERROR,
    payload: error
})