import React from "react";
import Navbar from "./layout/Navbar";
import About from "./components/About";
import Discography from "./components/Discography";
import Clips from "./components/Clips";
import Contact from "./components/Contact";
import Player from "./components/Player";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <About />
      <Discography />
      <Clips />
      <Player />
      <Contact />
      <footer>by Maciek</footer>
    </div>
  );
}

export default App;
