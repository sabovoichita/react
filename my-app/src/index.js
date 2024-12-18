import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

class MyComponent1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Change code below this line
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );
    // Change code above this line
  }
}

// Define the JSX constant first
const MyComponent = function () {
  // Change code below this line

  return <div>text</div>;

  // Change code above this line
};

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
// Add your code below this line
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

// Render the application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MyComponent1 />
    <MyComponent />
    {JSX} {/* Render the JSX directly */}
    {JSX1} {/* Render the JSX1 directly */}
    <App />
    {/* Remove <JSX /> here, as it is not a valid component */}
  </React.StrictMode>
);

root.render(JSX2);
// root.render(JSX2, document.getElementById("challenge-node"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
