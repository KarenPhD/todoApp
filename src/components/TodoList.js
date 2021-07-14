import React, {useContext} from 'react'
import Table from "./Table";
import {Context} from '../context/todoContext';

const TodoList = () => {
    const {state: todoList, deleteTodoItem} = useContext(Context);
    const columns = React.useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'End Date',
                accessor: 'endDate',
            },
            {
                id: new Date(),
                Cell: ({row: {original: {id}}}) => <button onClick={()=> {deleteTodoItem(id)}}>Delete</button>

            }
        ],
        []
    );

    return (
        <div>
            <h2>TodoList</h2>
            <Table columns={columns} data={todoList}/>
        </div>
    )
};

export default TodoList
