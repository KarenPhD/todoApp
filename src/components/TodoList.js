import React, {useContext} from 'react'
import Table from "./Table";
import {Context} from '../context/todoContext';
import { Styles } from './tableStyles';

const TodoList = () => {
    const {state: todoList, deleteTodoItem} = useContext(Context);
    const columns = React.useMemo(
        () => [
            {
                Header: 'Task',
                accessor: 'task',
            },
            {
                Header: 'End Date',
                accessor: 'endDate',
            },
            {
                id: new Date(),
                Cell: ({row: {original: {id}}}) => <button className="btn btn-danger" onClick={()=> {deleteTodoItem(id)}}>Delete</button>
            }
        ],
        []
    );

    return todoList.length == 0 ? 
        <div className="noTasks_text">You currently have no tasks!</div>
        : (
            <Styles>
                <Table columns={columns} data={todoList}/>  
            </Styles> 
        )
};

export default TodoList
