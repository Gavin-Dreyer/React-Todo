import React from 'react'
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const Todo = props => {
    return (
        <div 
        onClick={() => props.toggleTask(props.theTask.id)}
        className={`Task${props.theTask.completed ? ` completed` : ''}`}>
            <p>
                {props.theTask.task}
            </p>
        </div>    
    )
}

export default Todo