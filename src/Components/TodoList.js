import React from "react";
import "./TodoList.css";
import Task from "./Task";

function TodoList(props) {
  const onTaskDeleteHandler = function (id) {
    console.log(id);
    props.deleteTask(id);
  };

  return (
    // <Task className="todoList">
    //   {props.tasks.map(function (task) {
    //     return (
    //       <div className="taskList">
    //         title={task.title}
    //         key={task.id}
    //         id={task.id}
    //         onTaskDeleteHandler={onTaskDeleteHandler}
    //       </div>
    //     );
    //   })}
    // </Task>
    <div className="todoList">
      {props.tasks.map((task) => (
        <Task
          title={task.title}
          time={task.time}
          key={task.id}
          id={task.id}
          onTaskDelete={onTaskDeleteHandler}
        />
      ))}
    </div>
  );
}

export default TodoList;
