import React, { useState } from "react";
import "./TodoForm.css";
// import styled from "styled-components";



function TodoForm(props) {
  const [inputTask, setInputTask] = useState("");
  const [inputTime, setInputTime] = useState("");



  const onFormSubmitHandler = function (e) {
    e.preventDefault();
    console.log(e);
    const taskObject = {
      title: inputTask,
      time: inputTime,
      id: Math.random(),
    };
    console.log(taskObject);
    props.onAddTodo(taskObject);
    setInputTask("");
    setInputTime("");
  };

  const onDataChangeHandler = (e) => {
    setInputTask(e.target.value);
  };
  const onTimeChangeHandler = (e) => {
    setInputTime(e.target.value);
  };

  return (
    <div className="todo">
      <form onSubmit={onFormSubmitHandler}>
        <input
          type={"text"}
          placeholder="Enter Todo"
          value={inputTask}
          onChange={onDataChangeHandler}
        />
        <input type="time" onChange={onTimeChangeHandler} value={inputTime} />
        <button type="submit" onClick={onFormSubmitHandler}>
          Add
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
