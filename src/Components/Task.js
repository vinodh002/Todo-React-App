import React from "react";
import "./Task.css";

function Task(props) {
  const deleteTask = function () {
    console.log(props);
    props.onTaskDelete(props.id);
  };

  return (
    <div className="task">
      <div class="taskTitle">{props.title}</div>
      <div class="taskTime">{props.time}</div>
      <button class="del" onClick={deleteTask}>
        Delete
      </button>
    </div>
  );
}

export default Task;
