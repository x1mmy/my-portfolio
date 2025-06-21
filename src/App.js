// src/App.js
import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import "./styles/Global.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="content">
        <Home />
        <About />
      </div>
    </div>
  );
}

export default App;