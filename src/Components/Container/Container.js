import React, { useEffect, useState } from "react";
import "../Container/Container.css";
import Activities from "../Activities/Activities";
import Summery from "../Summery/Summery";
const Container = () => {
  const [activities, setActivities] = useState([]);
  const [taskTime,setTaskTime] = useState([])
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);
  return (
    <div className="container">
      <Activities activities={activities}></Activities>
      <Summery></Summery>
    </div>
  );
};

export default Container;
