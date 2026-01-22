import React, { useState } from "react";

function Home() {
  const [message, setMessage] = useState(
    "This is the Home page of our Single Page Application."
  );

  return (
    <div>
      <h2>Home Page</h2>
      <p>{message}</p>

      <button onClick={() => setMessage("Home page updated without reload!")}>
        Click to Update
      </button>
    </div>
  );
}

export default Home;
