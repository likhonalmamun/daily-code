import React from "react";
import "../Task/Task.css";
const Task = ({ task }) => {
  console.log(task);
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
      <button>ADD TASK</button>
    </div>
  );
};

export default Task;
