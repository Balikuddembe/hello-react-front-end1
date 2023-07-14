import React from "react";
import { Link, Route, Routes } from 'react-router-dom'
import Greetings from "./components/Greetings";

function App() {
  return (
    <div>
      <Link to="/greetings">View Greetings</Link>
      <Routes>
        <Route path="/" element={<gg/>} />
        <Route path="/greetings" element={<Greetings />} />
      </Routes>
    </div>
  );
}

export default App;
