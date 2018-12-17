import React from "react";
import PropTypes from "prop-types";

class AddUser extends React.Component {
  initialUserState = {
    name: "",
    lastName: "",
    userName: "",
    totalGames: 0
  };

  state = {
    user: {
      ...this.initialUserState
    },
    error: false
  };

  onSubmit = event => {
    event.preventDefault();
    if (this.props.isUserNameAvailable(this.state.user.userName)) {
      this.props.appendUser(this.state.user);
      this.setState({ user: { ...this.initialUserState }, error: false });
    } else {
      this.setState({ error: true });
    }
  };

  onInputChange = event => {
    const { name, value } = event.target;
    let currentUser = this.state.user;
    currentUser = {
      ...currentUser,
      [name]: value
    };
    this.setState({ user: currentUser });
  };

  isDisabled = () => {
    const { name, userName } = this.state.user;
    return name.length === 0 || userName.length === 0;
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <p>Add the new User Info</p>
        <label htmlFor="user-name">
          <span>Name</span>
          <input
            type="text"
            name="name"
            id="user-name"
            value={this.state.user.name}
            onChange={this.onInputChange}
          />
        </label>
        <label htmlFor="user-lastName">
          <span>Last name</span>
          <input
            type="text"
            name="lastName"
            id="user-lastName"
            value={this.state.user.lastName}
            onChange={this.onInputChange}
          />
        </label>
        <label htmlFor="user-userName">
          <span>Username</span>
          <input
            type="text"
            name="userName"
            id="user-userName"
            value={this.state.user.userName}
            onChange={this.onInputChange}
          />
        </label>
        <button disabled={this.isDisabled()}>Add User</button>
        {this.state.error && (
          <p className="error">
            There is already an user with the typed username
          </p>
        )}
      </form>
    );
  }
}

AddUser.proptypes = {
  appendUser: PropTypes.func.isRequired,
  isUserNameAvailable: PropTypes.bool.isRequired
};

export default AddUser;
