import React from "react";
import PropTypes from "prop-types";

class MessageSender extends React.Component {
  state = {
    message: ""
  };

  onSubmit = event => {
    event.preventDefault();
    const { submitMessage, user } = this.props;
    submitMessage(user, this.state.message);
  };

  onChange = message => {
    this.setState({ message });
  };

  isDisabled = () => {
    return this.state.message.length === 0;
  };

  render() {
    return (
      <div>
        <form className="input-group" onSubmit={this.onSubmit}>
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

MessageSender.propTypes = {
  user: PropTypes.string.isRequired,
  submitMessage: PropTypes.func.isRequired
};

export default MessageSender;
