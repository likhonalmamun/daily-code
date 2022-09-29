import React from "react";
import "../Task/Task.css";
import "../../media.css"
const Task = ({ task, addTask }) => {
  // console.log(task);
  return (
    <div className="task">
      <div className="image">
        <img src={task.img} alt="" />
      </div>
      <div className="details">
        <h2>{task.activity}</h2>
        <p>{task.detail}</p>
        <h3>
          Duration : <span>{task.duration} </span> min{" "}
        </h3>
      </div>
      <button onClick={() => addTask(task.duration)}>ADD TASK</button>
    </div>
  );
};

export default Task;
