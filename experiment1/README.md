# Aim:
To design and develop a basic Single Page Application (SPA) using a modern frontend framework (React.js) in order to understand client-side rendering, component-based architecture, and smooth page navigation without full page reloads.

# Theory:
A Single Page Application (SPA) is a web application that loads a single HTML page and dynamically updates its content as the user interacts with the application. Unlike traditional multi-page websites, SPAs do not reload the entire page when navigating between different sections.

Modern frontend frameworks like React.js allow developers to build SPAs using a component-based approach, where the user interface is divided into reusable components. React uses a virtual DOM to efficiently update only the parts of the UI that change, improving performance and user experience.

For navigation inside an SPA, React Router is used. It enables client-side routing using components such as BrowserRouter, Routes, Route, and Link, allowing seamless transitions between different views without refreshing the browser.

Using tools like Vite, developers can create fast, optimized React applications with minimal configuration and faster development builds.

# Procedure:

1. Install Node.js and npm on the system.

2. Create a new React project using Vite:

npm create vite@latest


3. Select React as the framework and JavaScript as the variant.

4. Navigate into the project folder and install dependencies:

cd project-name
npm install


Install React Router:

npm install react-router-dom


5. Create separate components such as Home, About, and Contact.

6. Configure routing in App.jsx using:

BrowserRouter

Routes

Route

7. Use Link components to navigate between pages.

Start the development server:

npm run dev


8. Open the application in the browser and verify smooth navigation without page reload.

# Learning Outcomes:

After completing this experiment, the student will be able to:

Understand the concept of Single Page Applications (SPA)

Explain the advantages of SPA over traditional web applications

Create a React application using Vite

Implement client-side routing using React Router

Use reusable components in React

Develop fast, responsive, and modern frontend applications