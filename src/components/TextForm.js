import React, { useState } from "react";

const darkMode = {
  color: "white",
  backgroundColor: "black",
};

const lightMode = {
  color: "black",
  backgroundColor: "transparent",
};

export default function TextForm(props) {
  // this will not be destroyed ...current value can be used against another function call
  // use state will return an array with two item
  // [count,setcount] is state variables
  const [Text, setText] = useState("");
  const [myStyle, setMyStyle] = useState(lightMode);
  return (
    <>
      <div>
        <h2 className="ms-1">{props.heading}</h2>
        <div className="mb-3">

          <textarea style={myStyle} className="form-control" id="mybox" rows="8" placeholder="Enter text here" value={Text} onChange={(e) => { setText(e.target.value);}}>
          </textarea>

        </div>
        <button className="btn btn-primary" onClick={() => {setText(Text.toUpperCase());}}>
          UpperCase
        </button>
        <button className="btn btn-primary mx-3" onClick={() => {setText(Text.toLowerCase());}}>
          LowerCase
        </button>
        <button className="btn btn-primary" onClick={() => {
          if(myStyle===lightMode) setMyStyle(darkMode); else setMyStyle(lightMode);
          }}>
          Dark Mode
        </button>
        <span className="mx-3">
          <input type="search" className="p-1" placeholder="Search Here" onChange={(e)=>{
            if(new RegExp(e.target.value,"i").test(Text)){
              const pattern = new RegExp(e.target.value, "gi");
              setText(Text.replace(pattern,match => <mark>{match}</mark>));
            };
            }} 
             />
        </span>
      </div>

      <div className="text-details my-3">
        <h2>Text Details</h2>
        <p>
          There are {Text.split(" ").length} words and {Text.length} characters.
        </p>
      </div>
      <div className="text-preview my-3">
        <h2>Preview</h2>
        <p> {Text} </p>
      </div>
    </>
  );
}
