import { faTasks } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../Header/Header.css";
const Header = () => {
  return (
    <div className="header">
      <p>
        {" "}
        <FontAwesomeIcon icon={faTasks}></FontAwesomeIcon>{" "}
        <span style={{ color: "red" }}>Daily</span> Code{" "}
      </p>
      <hr />
    </div>
  );
};

export default Header;
