import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import PropTypes from "prop-types";

class MyComponent7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
    };
    // Change code below this line
    this.toggleVisibility = this.toggleVisibility.bind(this);
    // Change code above this line
  }
  // Change code below this line

  toggleVisibility() {
    this.setState((state) => ({
      visibility: !state.visibility,
    }));
  }
  // Change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}

class MyComponent6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello",
    };
    // Change code below this line
    this.handleClick = this.handleClick.bind(this);
    // Change code above this line
  }
  handleClick() {
    this.setState({
      text: "You clicked!",
    });
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <button onClick={this.handleClick}>Click Me</button>
        {/* Change code above this line */}
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}

class MyComponent5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Initial State",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Change code below this line
    this.setState({
      name: "React Rocks!",
    });
    // Change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

class MyComponent4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "LearnNewProgram",
    };
  }
  render() {
    // Change code below this line
    const name = this.state.name;
    // Change code above this line
    return (
      <div>
        {/* Change code below this line */}
        <h1>{name}</h1>
        {/* Change code above this line */}
      </div>
    );
  }
}

class MyComponent3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "LearnReact",
    };
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <h1>{this.state.name}</h1>
        {/* Change code above this line */}
      </div>
    );
  }
}

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Only change code below this line
    this.state = {
      firstName: "Ana",
    };
    // Only change code above this line
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
}

class CampSite extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <Camper />
      </div>
    );
  }
}
// Change code below this line
const Camper = (props) => {
  return <p>{props.name}</p>;
};

Camper.defaultProps = { name: "CamperBot" };

Camper.propTypes = { name: PropTypes.string.isRequired };

class App1 extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <Welcome name={"Adrian"} />
        {/* Change code above this line */}
      </div>
    );
  }
}

class Welcome extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <p>
          Hello, <strong>{this.props.name}</strong>!
        </p>
        {/* Change code above this line */}
      </div>
    );
  }
}

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>;
};

// Change code below this line
Items.propTypes = { quantity: PropTypes.number.isRequired };
// Change code above this line

Items.defaultProps = {
  quantity: 0,
};

Items.defaultProps = {
  quantity: 0,
};

class ShoppingCart extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return <Items />;
  }
}

// class ShoppingCart extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     {
//       /* Change code below this line */
//     }
//     return <Items quantity={10} />;
//     {
//       /* Change code above this line */
//     }
//   }
// }

// const ShoppingCart = (props) => {
//   return (
//     <div>
//       <h1>Shopping Cart Component</h1>
//     </div>
//   );
// };
// // Change code below this line

// ShoppingCart.defaultProps = {
//   items: 0,
// };

const List = (props) => {
  //  {/* Change code below this line */}
  return <p>{props.tasks.join(", ")}</p>;
  // {/* Change code above this line */}
};

class ToDo extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        {/* Change code below this line */}
        <List tasks={["HTML", "CSS", "JS"]} />
        <h2>Tomorrow</h2>
        <List tasks={["Saas", "React", "Redux"]} />
        {/* Change code above this line */}
      </div>
    );
  }
}

const CurrentDate = (props) => {
  return (
    <div>
      {/* Change code below this line */}
      <p>The current date is: {props.date}</p>
      {/* Change code above this line */}
    </div>
  );
};

class Calendar extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        {/* Change code below this line */}
        <CurrentDate date={Date()} />
        {/* Change code above this line */}
      </div>
    );
  }
}

class MyComponent2 extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return <h1>My First React Component!</h1>;
  }
}

// Individual Components
const NonCitrus = () => (
  <div>
    <h2>NonCitrus:</h2>
    <ul>
      <li>Apples</li>
      <li>Blueberries</li>
      <li>Strawberries</li>
      <li>Bananas</li>
    </ul>
  </div>
);

const Citrus = () => (
  <div>
    <h2>Citrus:</h2>
    <ul>
      <li>Lemon</li>
      <li>Lime</li>
      <li>Orange</li>
      <li>Grapefruit</li>
    </ul>
  </div>
);

const Vegetables = () => (
  <div>
    <h2>Vegetables:</h2>
    <ul>
      <li>Brussels Sprouts</li>
      <li>Broccoli</li>
      <li>Squash</li>
    </ul>
  </div>
);

// Fruits and Food Types
class Fruits extends React.Component {
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        <NonCitrus />
        <Citrus />
      </div>
    );
  }
}

class TypesOfFood extends React.Component {
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
        <Vegetables />
      </div>
    );
  }
}

// Example of Parent and Child Components
const ChildComponent = () => <p>I am the child</p>;

class ParentComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />
      </div>
    );
  }
}

// Simple Component Examples
const MyComponent = () => <div>My Simple Component</div>;

class MyComponent1 extends React.Component {
  render() {
    return <h1>Hello React!</h1>;
  }
}

// JSX Examples
const JSX = <h1 className="h1">Hello JSX!</h1>;
const JSX1 = (
  <div>
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
    <h2>Welcome to React!</h2>
    <p>Be sure to close all tags!</p>
    <h1>Hello World</h1>
    <p>Let's render this to the DOM</p>
  </div>
);

// Render All Components
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MyComponent7 />
    <MyComponent6 />
    <MyComponent5 />
    <MyComponent4 />
    <MyComponent3 />
    <StatefulComponent />
    <CampSite />
    <App1 />
    <ShoppingCart />
    <ToDo />
    <Calendar />
    <MyComponent2 />
    <TypesOfFood />
    <ParentComponent />
    <MyComponent1 />
    <MyComponent />
    {JSX}
    {JSX1}
    {JSX2}
    <App />
  </React.StrictMode>
);

// Performance Measurement
reportWebVitals();
