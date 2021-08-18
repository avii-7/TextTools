//react & react-dom is a module presenet in node module folder...
// reactDom.render() is presenet in react-dom module.....
// html <h1></h1> tag(JSX) we are able to use only because react module
// if you use bebel then come to know that <h1>Hey</h1>
// is converted into React.createElement("h1", null, "Hello World");
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// ReactDOM.render(/*#__PURE__*/ React.createElement("h1", null, "Hello World"), document.getElementById("root"));
// ReactDOM.render(<h1>Hell</h1>, document.getElementById("root"));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
