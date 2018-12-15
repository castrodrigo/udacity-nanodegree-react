import React, { Component } from "react";
import InputMirror from "./components/InputMirror";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <InputMirror />
        </div>
      </div>
    );
  }
}

export default App;
