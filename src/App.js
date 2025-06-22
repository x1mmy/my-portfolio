// src/App.js
import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import "./styles/Global.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {

//   <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
// <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
// <link rel="shortcut icon" href="/favicon.ico" />
// <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
// <link rel="manifest" href="/site.webmanifest" />

  return (
    <div className="App">
      <NavBar />
      <div id="content">
        <Home />
        <About />
        <Experience />
        <Projects />

        {/* Basic Footer */}
        <footer className="footer">
          <div className="footer-content">
            <p>© 2025 Zimraan Anjum. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;