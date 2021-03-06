import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

function App() {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}

export default App;
