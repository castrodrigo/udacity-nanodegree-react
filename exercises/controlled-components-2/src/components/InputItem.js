import React from "react";
import PropTypes from "prop-types";

class InputItem extends React.Component {
  state = {
    value: ""
  };

  onChange = event => {
    this.setState({ value: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.addItem(this.state.value);
  };

  inputIsEmpty = () => {
    return this.state.value === "";
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={this.state.value}
          onChange={this.onChange}
        />
        <button disabled={this.inputIsEmpty()}>Add</button>
      </form>
    );
  }
}

InputItem.propTypes = {
  addItem: PropTypes.func.isRequired
};

export default InputItem;
