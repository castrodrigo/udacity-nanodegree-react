import React from "react";

class AddUser extends React.Component {
  state = {
    name: "",
    lastName: "",
    userName: "",
    totalGames: 0
  };

  onSubmit = event => {
    event.preventDefault();
  };

  onChangeName = event => {
    this.setState({ name: event.target.value });
  };

  onChangeLastName = event => {
    this.setState({ lastName: event.target.value });
  };

  onChangeUserName = event => {
    this.setState({ userName: event.target.value });
  };

  isDisabled = () => {
    const { name, userName } = this.state;
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
            value={this.state.name}
            onChange={this.onChangeName}
          />
        </label>
        <label htmlFor="user-lastName">
          <span>Last name</span>
          <input
            type="text"
            name="lastName"
            id="user-lastName"
            value={this.state.lastName}
            onChange={this.onChangeLastName}
          />
        </label>
        <label htmlFor="user-userName">
          <span>Username</span>
          <input
            type="text"
            name="userName"
            id="user-userName"
            value={this.state.userName}
            onChange={this.onChangeUserName}
          />
        </label>
        <button disabled={this.isDisabled()}>Create new User</button>
      </form>
    );
  }
}

export default AddUser;
