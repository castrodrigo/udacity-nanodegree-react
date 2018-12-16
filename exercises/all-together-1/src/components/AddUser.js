import React from "react";

class AddUser extends React.Component {
  state = {
    user: {
      name: "",
      lastName: "",
      userName: "",
      totalGames: 0
    },
    error: false
  };

  onSubmit = event => {
    event.preventDefault();
    if (this.props.checkUsername(this.state.user.userName)) {
      this.props.appendUser(this.state.user);
    } else {
      this.setState({ error: true });
    }
  };

  onChangeName = event => {
    const name = event.target.value;
    this.setState(prevState => {
      const { user } = prevState;
      user.name = name;
      return { ...prevState, user };
    });
  };

  onChangeLastName = event => {
    const lastName = event.target.value;
    this.setState(prevState => {
      const { user } = prevState;
      user.lastName = lastName;
      return { ...prevState, user };
    });
  };

  onChangeUserName = event => {
    const userName = event.target.value;
    this.setState(prevState => {
      const { user } = prevState;
      user.userName = userName;
      return { ...prevState, user };
    });
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
            onChange={this.onChangeName}
          />
        </label>
        <label htmlFor="user-lastName">
          <span>Last name</span>
          <input
            type="text"
            name="lastName"
            id="user-lastName"
            value={this.state.user.lastName}
            onChange={this.onChangeLastName}
          />
        </label>
        <label htmlFor="user-userName">
          <span>Username</span>
          <input
            type="text"
            name="userName"
            id="user-userName"
            value={this.state.user.userName}
            onChange={this.onChangeUserName}
          />
        </label>
        <button disabled={this.isDisabled()}>Create new User</button>
        {this.state.error && (
          <p className="error">
            There is already an user with the typed username
          </p>
        )}
      </form>
    );
  }
}

export default AddUser;
