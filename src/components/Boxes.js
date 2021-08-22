import axios from 'axios'
import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchImagesError, fetchImagesPending, fetchImagesSuccess } from '../redux/actions'
import Cats from './Cats'

const Boxes = () => {
    const state = useSelector(state => ({...state.images}))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchImagesPending())
        axios.get('https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=5')
        .then(res => res.data)
        .then(res => {
            if(res.error) {
                throw(res.error)
            }
            dispatch(fetchImagesSuccess(res));
            return res.images
        })
        .catch(error => {
            dispatch(fetchImagesError(error));
        })
    }, [dispatch])

    return (
        <div>
            <div className="category-content">Boxes</div>
            <ul>
                {
                    state.images && 
                    state.images.map((image) => {
                    return (
                            <li key={image.id}>
                                <Cats src={image.url} alt="Cat's photo"/>                      
                            </li>
                        )
                    })
                }      
            </ul>
        </div>
    )
}

export default Boxes
