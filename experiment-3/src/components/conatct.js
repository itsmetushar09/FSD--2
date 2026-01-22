import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Contact Page</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>
        Hello, <strong>{name || "User"}</strong> 👋
      </p>
    </div>
  );
}

export default Contact;
