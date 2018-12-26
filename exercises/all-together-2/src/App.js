import React, { Component } from "react";
import ChatWindow from "./components/ChatWindow";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    users: [{ username: "Amy" }, { username: "John" }],
    messages: [
      { username: "Amy", text: "Hi, Jon!" },
      { username: "Amy", text: "How are you?" },
      { username: "John", text: "Hi, Amy! Good, you?" }
    ]
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          {this.state.users.map(user => (
            <ChatWindow
              key={user.username}
              user={user.username}
              messages={this.state.messages}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
