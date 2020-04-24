import React from "react";
import Navbar from "./layout/Navbar";
import About from "./components/About";
import Discography from "./components/Discography";
import Clips from "./components/Clips";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <About />
      <Discography />
      <Clips />
      <Contact />
      <footer>by Maciek</footer>
    </div>
  );
}

export default App;
