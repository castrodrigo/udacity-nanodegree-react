import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Question from "./components/Question";
import AnswerSelect from "./components/AnswerSelect";
import Score from "./components/Score";

class App extends Component {
  state = {
    totalAswers: 0,
    correctAnswers: 0,
    operation: {
      values: [],
      proposedAnswer: "",
      answer: false
    }
  };

  componentDidMount() {
    this.generateEquation();
  }

  generateEquation = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer =
      Math.floor(Math.random() * 3) + value1 + value2 + value3;

    this.setState({
      operation: {
        values: [value1, value2, value3],
        proposedAnswer,
        answer: proposedAnswer === value1 + value2 + value3
      }
    });
  };

  userSelection = answer => {
    this.setState(prevState => ({
      totalAswers: prevState.totalAswers + 1,
      correctAnswers:
        answer === prevState.operation.answer
          ? prevState.correctAnswers + 1
          : prevState.correctAnswers
    }));
    this.generateEquation();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <Question
            values={this.state.operation.values}
            proposedAnswer={this.state.operation.proposedAnswer}
          />
          <AnswerSelect onUserSelection={this.userSelection} />
          <Score
            correct={this.state.correctAnswers}
            total={this.state.totalAswers}
          />
        </div>
      </div>
    );
  }
}

export default App;
