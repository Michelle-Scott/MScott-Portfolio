import React from "react";
import { Container } from "reactstrap";
import Navigation from "./components/navigation/Nav";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <Container>
      <Navigation />
      <Header />
    </Container>
  );
}

export default App;
