import React from "react";
import ItemList from "./components/ItemList";
import InputItem from "./components/InputItem";
import DeleteControl from "./components/DeleteControl";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  state = {
    items: []
  };

  addItem = newItem => {
    this.setState(prevState => ({
      items: [...prevState.items, newItem]
    }));
  };

  deleteLastItem = () => {
    this.setState(prevState => ({ items: prevState.items.slice(0, -1) }));
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <InputItem addItem={this.addItem} />
        <DeleteControl
          isDisabled={this.noItemsFound()}
          onClick={this.deleteLastItem}
        />
        <ItemList items={this.state.items} />
      </div>
    );
  }
}

export default App;
