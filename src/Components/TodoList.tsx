import React from "react";
import {TaskType} from "../App";


type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
}



function TodoList(props: TodoListPropsType) {
    let dynamicTask = props.tasks.map(t => <li>
        <input type="checkbox" checked={t.isDone}/>
        <span>{t.title}</span>
        <button onClick={()=>alert('Hi')}>x</button>
    </li>)


    return (
        <div className='todolist'>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {dynamicTask}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}

export default TodoList;