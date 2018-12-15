import React from "react";

class InputMirror extends React.Component {
  state = {
    mirrorContent: ""
  };

  onChangeIput = value => this.setState({ mirrorContent: value });

  render() {
    return (
      <React.Fragment>
        <input
          type="text"
          placeholder="Say Something"
          value={this.state.mirrorContent}
          onChange={event => this.onChangeIput(event.target.value)}
        />
        <p className="echo">Echo:</p>
        <p>
          {this.state.mirrorContent.length > 0
            ? this.state.mirrorContent
            : "This area will mirror what you type on input"}
        </p>
      </React.Fragment>
    );
  }
}

export default InputMirror;
