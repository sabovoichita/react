import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Child Component
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

// Parent Component
class ParentComponent extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />
      </div>
    );
  }
}

// Class Component Example
class MyComponent1 extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );
  }
}

//  Define the JSX constant first
const MyComponent = function () {
  // Change code below this line
  return <div>text</div>;
  // Change code above this line
};

// JSX Examples
const JSX = <h1 className="h1">Hello JSX!</h1>;
const JSX1 = (
  <div>
    {/* comments area */}
    <h1>Paragraph One</h1>
    <p>Paragraph Three</p>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </div>
);
const JSX2 = (
  <div className="myDiv">
    <div>
      <h2>Welcome to React!</h2> <br />
      <p>Be sure to close all tags!</p>
      <hr />
    </div>
    <h1>Add a class to this div</h1>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);

// Render All Components and JSX Together
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ParentComponent />
    <MyComponent1 />
    <MyComponent />
    {JSX}
    {JSX1}
    {JSX2}
    <App />
  </React.StrictMode>
);

// Start Measuring Performance

// root.render(JSX2);
// root.render(JSX2, document.getElementById("challenge-node"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
