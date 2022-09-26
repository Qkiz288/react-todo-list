import { useState } from "react";
import NewToDo from "./components/newToDo";
import ToDoList from "./components/todoList";
import { ToDo } from "./todo.model";

const App: React.FC = () =>{ 
  const [ todos, setTodos ]  = useState<ToDo[]>([]);

  const toDoAddHandler = (text: string) => {
    setTodos(previousTodos => [...previousTodos, {id: Math.random().toString(), text: text}]);
  };

  const toDoDeleteHandler = (toDoId: string) => {
    setTodos(previousTodos => {
      return previousTodos.filter(toDo => toDo.id !== toDoId);
    });
  };

  return <div className="App">
    <NewToDo onAddToDo={toDoAddHandler}/>
    <ToDoList items={todos} onDeleteToDo={toDoDeleteHandler}/>
  </div>
  };

export default App;
