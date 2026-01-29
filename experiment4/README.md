# Aim:

To understand and implement state management in React by creating a dynamic component that updates and renders UI based on user interactions using the useState hook.

# Theory:

State management is a core concept in React that allows components to store, update, and manage data that changes over time. Unlike regular variables, state enables React components to re-render automatically whenever its value changes.

In React (especially functional components), state is handled using the useState Hook, which provides two things:

The current state value

A function to update that state

Syntax:

const [state, setState] = useState(initialValue);


Here:

state → current value

setState → function to update value

initialValue → starting value of state

Whenever setState() is called, React re-renders the component, reflecting the updated data on the UI.

State management is essential for:

Handling user inputs

Counter applications

Form validation

Theme switching

Showing/hiding components

Dynamic content rendering


# Procedure: 
Step 1: Create React Application

Open terminal and run:

npx create-react-app state-demo
cd state-demo
npm start


This creates and starts a new React project.

Step 2: Open Project in Code Editor

Open the folder in VS Code and navigate to:

src/App.js

Step 3: Import useState Hook

Add the following at the top of App.js:

import { useState } from "react";

Step 4: Implement State Logic

Replace App component code with:

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>React State Management</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default App;

Step 5: Run Application

Ensure server is running:

npm start


Open browser at:

http://localhost:3000


Click buttons and observe count updating dynamically.

# Learning Outcomes:

Understand the concept of state in React
Use useState Hook to manage component data
Implement dynamic UI updates based on state changes
Handle user events like button clicks
Observe React’s automatic re-rendering mechanism
Build interactive React components
Apply state management in real-world applications such as forms, dashboards, and counters