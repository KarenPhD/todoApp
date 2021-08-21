import axios from 'axios'
import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Link} from 'react-router-dom'
import { fetchCategoriesSuccess, fetchCategoriesError, fetchCategoriesPending } from '../redux/actions'


const CatsCategories = () => {

    const state = useSelector(state => ({...state.categories}))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategoriesPending())
        axios.get('https://api.thecatapi.com/v1/categories')
        .then(res => res.data)
        .then(res => {
            if(res.error) {
                throw(res.error)
            }
            dispatch(fetchCategoriesSuccess(res));
            return res.categories
        })
        .catch(error => {
            dispatch(fetchCategoriesError(error));
        })
    }, [dispatch])

    return (
        <div>
            <div className="content">
                <h2>Cats categories</h2>
                <div className="sidebar">
                <Router>
                    <Link to="/" className="active">Home</Link>
                    <ul>
                        {
                            state.categories && 
                            state.categories.map((category) => {
                            return (
                                    <li key={category.id}>
                                        <Link to={`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${category.id}`}>{category.name}</Link>                                       
                                    </li>
                                )
                            })
                        }      
                    </ul> 
                </Router> 
                </div>
            </div>
        </div>
    )
}

export default CatsCategories
