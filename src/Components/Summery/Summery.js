import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../Summery/Summery.css";
import "../../media.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Summery = ({ time }) => {
  let [breakTime, setBreakTime] = useState("0m");
  let storedTime = localStorage.getItem("break");
  useEffect(() => {
    if (storedTime) {
      setBreakTime(storedTime);
    }
  }, []);
  function update(time) {
    setBreakTime(time);
    localStorage.setItem("break", time);
  }
  let complete = () => {
    console.log("clicked");
    toast.success("Today's task is complete !!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="summery">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
      <h2> Add a break</h2>
      <div className="break">
        <button onClick={() => update("5m")}>5m</button>
        <button onClick={() => update("10m")}>10m</button>
        <button onClick={() => update("20m")}>20m</button>
        <button onClick={() => update("30m")}>30m</button>
      </div>
      <h2>Task Details</h2>
      <div className="task-info">
        <h2>
          Task Time : <span className="task-d"> {time} </span> min{" "}
          <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
        </h2>
      </div>
      <div className="break-info">
        <h2>
          Break Time : <span className="break-d"> {breakTime} </span>{" "}
          <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
        </h2>
      </div>
      <button className="complete-btn" onClick={complete}>
        Completed All
      </button>
    </div>
  );
};

export default Summery;
