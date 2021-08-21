import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import imageReducer from "./imageReducer";

const rootReducer = combineReducers({
    categories: categoryReducer,
    images: imageReducer
})

export default rootReducer