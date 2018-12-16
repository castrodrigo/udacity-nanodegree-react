import React, { Component } from "react";
import AddUser from "./components/AddUser";
import ListUsers from "./components/ListUsers";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    users: []
  };

  appendUser = newEntry =>
    this.setState(prevState => ({ users: [...prevState.users, newEntry] }));

  isUserNameAvailable = userName =>
    this.state.users.filter(item => item.userName === userName).length === 0;

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Create users for the game!</h2>
        <AddUser
          appendUser={this.appendUser}
          checkUsername={this.isUserNameAvailable}
        />
        <ListUsers users={this.state.users} />
      </div>
    );
  }
}

export default App;
