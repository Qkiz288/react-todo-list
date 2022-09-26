import React from 'react';

interface ToDoProps {
    items: {id: number, text: string}[];
  }

const ToDoList: React.FC<ToDoProps> = props => {
    return <ul>
        { props.items.map(todo =>
        <li key={todo.id}>{todo.text}</li>) }
    </ul>
}

export default ToDoList