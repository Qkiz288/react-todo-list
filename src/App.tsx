import NewToDo from "./components/newToDo";
import ToDoList from "./components/todoList";



const App: React.FC = () =>{ 
  const todos = [{id: 1, text: 'Finish the course'}];

  const toDoAddHandler = (text: string) => {
    console.log(text);
  };

  return <div className="App">
    <NewToDo onAddToDo={toDoAddHandler}/>
    <ToDoList items={todos}/>
  </div>
  };

export default App;
