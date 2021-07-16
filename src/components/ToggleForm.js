import React, {useState} from 'react'
import TodoInput from './TodoInput';

const ToggleForm = () => {
    const [toggleHide, setToggleHide] = useState(false);

    return toggleHide ?
    <TodoInput setToggleHide={setToggleHide}/>
    : (
        <div className="new-task d-flex">
            <div className="task-title">Add a new task</div>
            <button
                className="circle"
                onClick={() => setToggleHide(!toggleHide)}
            >
                +
            </button> 
        </div>
    );
};

export default ToggleForm
