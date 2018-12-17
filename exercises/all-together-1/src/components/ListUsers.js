import React from "react";

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
        <button onClick={this.toogleGames}>
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
              <tr key={item.userName}>
                <td>{item.userName}</td>
                <td>Played {this.state.show ? item.totalGames : "*"} games</td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default ListUsers;
