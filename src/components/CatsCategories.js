import axios from 'axios'
import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import { fetchCategoriesSuccess, fetchCategoriesError, fetchCategoriesPending } from '../redux/actions'
import Boxes from './Boxes'
import Button from './Button'
import Clothes from './Clothes'
import Hats from './Hats'
import Home from './Home'
import Sinks from './Sinks'
import Space from './Space'
import Sunglasses from './Sunglasses'
import Ties from './Ties'

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
            <Router>
                <div className="sidebar">
                    <h2 className="category">Select category</h2>
                
                    <Link to="/" className="active">Home</Link>
                    <ul>
                        {
                            state.categories && 
                            state.categories.map((category) => {
                            return (
                                    <li key={category.id}>
                                        <Link to={"/" + category.name}>{category.name}</Link>                                       
                                    </li>
                                )
                            })
                        }      
                    </ul> 
                </div>
                <div className="routes">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/hats" component={Hats} />
                        <Route path="/boxes" component={Boxes} />
                        <Route path="/clothes" component={Clothes} />
                        <Route path="/ties" component={Ties} />
                        <Route path="/sunglasses" component={Sunglasses} />
                        <Route path="/space" component={Space} />
                        <Route path="/sinks" component={Sinks} />
                    </Switch>
                </div>
            </Router>
            <Button />
        </div>
    )
}

export default CatsCategories
