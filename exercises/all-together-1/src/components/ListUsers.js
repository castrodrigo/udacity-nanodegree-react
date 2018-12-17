import React from "react";
import PropTypes from "prop-types";
import ListUserItem from "./ListUsersItem";

class ListUsers extends React.Component {
  state = {
    show: true
  };

  toogleGames = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  };

  render() {
    return (
      <React.Fragment>
        <h2 className="users">Users</h2>
        <button
          onClick={this.toogleGames}
          disabled={this.props.users.length === 0}
        >
          {this.state.show ? "Hide" : "Show"} total games played
        </button>
        <table>
          <thead>
            <tr key="header">
              <th>Username</th>
              <th>Total Games</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map(item => (
              <ListUserItem
                key={item.userName}
                user={item}
                showData={this.state.show}
              />
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

ListUsers.propTypes = {
  users: PropTypes.array.isRequired
};

export default ListUsers;
