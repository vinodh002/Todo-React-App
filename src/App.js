import { useState } from "react";
import "./App.css";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

function App() {
  const [task, setTask] = useState([]);

  const onAddTodoHandler = (taskObject) => {
    setTask(function (prevTask) {
      return [...prevTask, taskObject];
    });
  };

  const deleteTaskHandler = function (id) {
    setTask(function (prevTask) {
      return prevTask.filter((task) => {
        console.log(task.id, id);
        return task.id != id;
      });
    });
  };

  return (
    <div className="App">
      <TodoForm onAddTodo={onAddTodoHandler} />
      <TodoList tasks={task} deleteTask={deleteTaskHandler} />
    </div>
  );
}

export default App;
