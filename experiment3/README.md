# Aim:

To implement client-side routing in a Single Page Application (SPA) using a modern frontend framework in order to enable navigation between multiple views without reloading the web page.

# Theory:

In a Single Page Application (SPA), the entire application runs inside a single HTML page. Instead of loading a new page from the server for each request, SPAs dynamically update the content using JavaScript.

Routing in SPAs is handled on the client side using libraries such as React Router. React Router allows developers to define multiple routes that map URLs to specific components. When a user navigates to a different route, only the required component is rendered, improving performance and user experience.

Key routing components include:

BrowserRouter: Wraps the application and enables routing using browser history.

Routes: Contains all route definitions.

Route: Maps a URL path to a component.

Link: Used for navigation without page reload.

Client-side routing makes applications faster, smoother, and more interactive compared to traditional multi-page applications.

# Procedure:

Create or open a React-based SPA using Vite.

Install the React Router library:

npm install react-router-dom


Create multiple components such as Home, About, and Contact.

Open App.jsx and import required routing components:

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


Wrap the application inside BrowserRouter.

Define routes using Routes and Route components.

Use Link components to navigate between routes.

Save the files and start the development server:

npm run dev


Verify that navigation occurs smoothly without full page reload.

# Learning Outcomes:

After completing this experiment, the student will be able to:

Understand the concept of client-side routing

Explain the role of routing in SPAs

Implement routing using React Router

Navigate between multiple components without page refresh

Build scalable and structured React applications

Improve user experience through seamless navigation