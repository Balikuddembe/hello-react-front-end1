import React from "react";
import { Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Link to="/greetings">View Greetings</Link>
      <Routes>
        <Route path="/" element={<gg/>} />
        <Route path="/greetings" element={<gg/>} />
      </Routes>
    </div>
  );
}

export default App;
