import React from "react";
import Navbar from "./layout/Navbar";
import About from "./components/About";
import Discography from "./components/Discography/Discography";
import Clips from "./components/Clips";
import Contact from "./components/Contact";
import Player from "./components/player/Player";
import Footer from "./layout/Footer";
import "./App.scss";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <About />
      <Discography />
      <Clips />
      <Player />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
