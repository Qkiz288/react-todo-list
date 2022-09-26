import React, { useRef } from "react";

type NewToDoProps = {
    onAddToDo: (text: string) => void;
}

const NewToDo: React.FC<NewToDoProps> = props => {   

    const textInputRef = useRef<HTMLInputElement>(null);

    const toDoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        console.log(enteredText);
        props.onAddToDo(enteredText);
    };

    return <form onSubmit={toDoSubmitHandler}>
        <div>
            <label htmlFor="todo-text">Todo Text</label>
            <input type="text" id="todo-text" ref={textInputRef}/>
        </div>
        <button type="submit">ADD TODO</button>
    </form>
};

export default NewToDo;