import { useState } from "react";
import "./button.css";

const Button = (props) => {
  return (
    <div className="button-div">
      <button className="previous" value="previous" onClick={props.func}>
        Previous
      </button>

      <button className="next" onClick={props.func} value="next">
        Next
      </button>
    </div>
  );
};

export default Button;
