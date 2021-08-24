import React, { useState } from "react";

export default function TextForm(props) {
  // this will not be destroyed ...current value can be used against another function call
  // use state will return an array with two item
  // [count,setcount] is state variables
  const [Text, setText] = useState("");
  return (
      <>
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="mybox" rows="8" placeholder="Enter text here" value={Text}
         onChange={(e) => {setText(e.target.value)}}></textarea>
      </div>
      <button className="btn btn-primary" onClick={() => {setText(Text.toUpperCase());}} > UpperCase </button>
        <button className="btn btn-primary mx-3" onClick={() => {setText(Text.toLowerCase());}} > LowerCase </button>
    </div>
    <div className="text-details my-3">
        <h2>Text Details</h2>
        <p>There are {Text.split(" ").length} words and {Text.length} characters.</p>
    </div>
    <div className="text-preview my-3">
        <h2>Preview</h2>
        <p> {Text} </p>
    </div>
    </>
  );
}

