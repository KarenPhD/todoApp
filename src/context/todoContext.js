import createDataContext from './createDataContext';
import {ADD_TODO_ITEM, DELETE_TODO_ITEM} from "./actions";

const todoReducer = (state, action) => {
    switch (action.type) {
        case DELETE_TODO_ITEM:
            return state.filter((todoItem) => todoItem.id !== action.payload);
        case ADD_TODO_ITEM:
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 99999),
                    name: action.payload.name,
                    endDate: action.payload.endDate,
                },
            ];
        default:
            return state;
    }
};

const addTodoItem = (dispatch) => {
    return (payload, callback) => {
        dispatch({type: ADD_TODO_ITEM, payload});
        if (callback) {
            callback();
        }
    };
};
const deleteTodoItem = (dispatch) => {
    return (id) => {
        dispatch({type: DELETE_TODO_ITEM, payload: id});
    };
};

export const {Context, Provider} = createDataContext(
    todoReducer,
    {addTodoItem, deleteTodoItem},
    []
);
