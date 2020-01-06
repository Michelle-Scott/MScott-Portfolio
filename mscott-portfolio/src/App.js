import React from "react";
import { Container } from "reactstrap";
import Navigation from "./components/navigation/Nav";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import SampleDiv from "./components/SampleDiv";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <SampleDiv />
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
