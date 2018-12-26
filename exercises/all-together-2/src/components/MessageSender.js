import React from "react";

class MessageSender extends React.Component {
  state = {
    value: ""
  };

  onChange = value => {
    this.setState({ value });
  };

  isDisabled = () => {
    return this.state.value.length === 0;
  };

  render() {
    return (
      <div>
        <form className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your message..."
            onChange={event => this.onChange(event.target.value)}
          />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default MessageSender;
