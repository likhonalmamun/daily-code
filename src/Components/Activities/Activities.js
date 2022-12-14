import React from "react";
import "../Activities/Activities.css";
import Task from "../Task/Task";

const Activities = ({ activities, fcn }) => {
  return (
    <div className="left">
      <h1> Select today’s Task</h1>
      <div className="activities">
        {activities.map((task) => (
          <Task key={task.key} addTask={fcn} task={task}></Task>
        ))}
      </div>
    </div>
  );
};

export default Activities;
