import React from "react";
import { useState } from "react";
import "../Summery/Summery.css";
const Summery = () => {

 let [breakTime , setBreakTime] = useState('')



  return (
    <div className="summery">
      <div className="user">
        <img src="user.jpg" alt="" />
        <h2>Likhon Al Mamun</h2>
      </div>
      <div className="user-info">
        <div className="box">
          <h3>55KG</h3>
          <h4>Weight</h4>
        </div>
        <div className="box">
        <h3>5'8 feet</h3>
          <h4>Height</h4>
        </div>
        <div className="box">
        <h3>17 Years</h3>
          <h4>Age</h4>
        </div>
      </div>
    <h2>  Add a break</h2>
      <div className="break">
        <button >5m</button>
        <button>10m</button>
        <button>20m</button>
        <button>30m</button>
      </div>
      <h2>Task Details</h2>
      <div className="task-info">
        <h2>Task Duration : <span>   </span> </h2>
      </div>
      <div className="break-info">
        <h2>Break Time : <span>  </span> </h2>
      </div>
    </div>
  );
};

export default Summery;