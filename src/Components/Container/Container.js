import React, { useEffect, useState } from "react";
import "../Container/Container.css";
import Activities from "../Activities/Activities";
import Summery from "../Summery/Summery";
let durations = [];
const Container = () => {
  const [activities, setActivities] = useState([]);
  const [taskTime, setTaskTime] = useState(0);
  function addTask(duration) {
    // console.log(durations , duration)
    durations.push(duration);
    let totalDuration = 0;
    for (let e of durations) {
      totalDuration = totalDuration + e;
    }
    setTaskTime(totalDuration);
    console.log(durations)
  }
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);
  return (
    <div className="container">
      <Activities fcn={addTask} activities={activities}></Activities>
      <Summery time={taskTime}></Summery>
    </div>
  );
};

export default Container;
