import React from "react";
import "./Error.css";

const Error = ({msg}) => {
  return (
    <div className="errorMessageContainer">
      <div className="error">
        <p>ERROR 404</p>
        <p>{msg}</p>
      </div>
    </div>
  );
};

export default Error;
