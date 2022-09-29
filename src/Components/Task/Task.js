import { faHeartCirclePlus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../Task/Task.css";
const Task = ({ task, addTask }) => {
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
      <button onClick={() => addTask(task.duration)}>ADD TASK  <FontAwesomeIcon style={{color:'purple',fontWeight:'800'}} icon={faHeartCirclePlus}></FontAwesomeIcon> </button>
    </div>
  );
};

export default Task;
