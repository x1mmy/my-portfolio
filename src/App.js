// src/App.js
import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import "./styles/Global.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="content">
        <Home />
        {/* We'll add more sections here later */}
      </div>
    </div>
  );
}

export default App;