import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../src/components/Home";
import About from "../src/components/About";
import Contact from "../src/components/conatct";

function App() {
  return (
    <BrowserRouter>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Experiment–3: Routing in SPA</h1>

        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ margin: "10px" }}>Home</Link>
          <Link to="/about" style={{ margin: "10px" }}>About</Link>
          <Link to="/contact" style={{ margin: "10px" }}>Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
