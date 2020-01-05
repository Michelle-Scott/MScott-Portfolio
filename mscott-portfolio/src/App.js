import React from "react";
import { Container } from "reactstrap";
import Navigation from "./components/navigation/Nav";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <AboutMe />
      <Skills />
    </div>
  );
}

export default App;
