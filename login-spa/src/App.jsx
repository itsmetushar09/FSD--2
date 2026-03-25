import React, { useState } from "react";

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setMessage("Please enter a valid email address");
      return;
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters long");
      return;
    }

    setMessage("Login Successful!");
  };

  return (
    <div style={{textAlign:"center", marginTop:"100px"}}>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <br/><br/>

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <br/><br/>

        <button type="submit">Login</button>

      </form>

      <p>{message}</p>
    </div>
  );
}

export default App;