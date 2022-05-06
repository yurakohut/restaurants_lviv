import React from "react";
import { Spinner } from "react-bootstrap";
import "./style.scss";

const Loader = () => {
  return (
    <div className="loader-container ">
      <img src="../images/loader.gif" alt="" />
    </div>
  );
};

export default Loader;
