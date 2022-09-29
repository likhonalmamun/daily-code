import React from "react";
import "../Activities/Activities.css";
import Task from "../Task/Task";
const Activities = ({ activities }) => {
  // console.log(activities)
  return (
     
    <div className="left">
        <h1> Select today’s Task</h1>
      <div className="activities">
      {activities.map((task) => {
        // console.log(task)
        return <Task key={task.key} task={task}></Task>;
      })}
      </div>
    </div>
  );
};

export default Activities;
