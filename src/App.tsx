import ToDoList from "./components/todoList";



const App: React.FC = () =>{ 
  const todos = [{id: 1, text: 'Finish the course'}];
  return <div className="App">
    <ToDoList items={todos}/>
  </div>
  };

export default App;
