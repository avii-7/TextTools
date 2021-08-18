import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  // this will not be destroyed ...current value can be used against another function call
  // use state will return an array with two item
  // [count,setcount] is state variables
  const [count, setCount] = useState("Enter text here....");
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="mybox" rows="8" placeholder="Enter text here" value={count}
         onChange={(e) => {setCount(e.target.value)}}></textarea>
      </div>
      <button
        className="btn btn-primary"
        onClick={() => {
          setCount(count.toUpperCase());
        }}
      >
        UpperCase
      </button>
    </div>
  );
}

TextForm.prototype = {
  heading: PropTypes.string.isRequired,
};
