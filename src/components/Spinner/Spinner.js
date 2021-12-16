import React from "react";
import { CSpinner } from "@coreui/react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="spinnerContainer">
      <CSpinner size="sm" color="warning" />
    </div>
  );
};

export default Spinner;
