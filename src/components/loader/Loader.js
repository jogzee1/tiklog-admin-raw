import React from "react";
import "./loader.css";
import ReactDOM from "react-dom";
import loaderImg from "./loader.gif";

const Loader = () => {
  return ReactDOM.createPortal(
    <div className="ld-wrapper">
      <div className="loader">
        <img src={loaderImg} alt="Loading..." />
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export const Spinner = () => {
  return (
    <div className="center-all">
      <img src={loaderImg} alt="Loading..." />
    </div>
  );
};

export default Loader;