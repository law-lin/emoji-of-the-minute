import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./components/HomePage.js";
import "./App.css";

function App() {
  return (
    <Router>
      <Route path="/" component={HomePage} />
    </Router>
  );
}

export default App;
