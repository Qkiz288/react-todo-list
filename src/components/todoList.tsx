import React from 'react';
import { ToDo } from '../todo.model';

interface ToDoProps {
    items: ToDo [];
    onDeleteToDo: (id: string) => void;
  }

const ToDoList: React.FC<ToDoProps> = props => {
    return <ul>
        { props.items.map(todo =>
        <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={props.onDeleteToDo.bind(null, todo.id)}>DELETE</button>
        </li>
        ) }
    </ul>
}

export default ToDoList