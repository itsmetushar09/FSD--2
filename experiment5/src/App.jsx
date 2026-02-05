import React, { Suspense, useState } from "react";

const Dashboard = React.lazy(() => import("./Dashboard"));

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Lazy Loading with Button</h1>

      <button onClick={() => setShow(true)}>
        Load Dashboard
      </button>

      {show && (
        <Suspense fallback={<h3>Loading Dashboard...</h3>}>
          <Dashboard />
        </Suspense>
      )}
    </div>
  );
}

export default App;
