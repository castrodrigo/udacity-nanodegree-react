import React from "react";

const ListUsers = ({ users }) => (
  <React.Fragment>
    <h2 className="users">Users</h2>
    <table>
      <thead>
        <tr key="header">
          <th>Username</th>
          <th>Total Games</th>
        </tr>
      </thead>
      <tbody>
        {users.map(item => (
          <tr key={item.userName}>
            <td>{item.userName}</td>
            <td>{item.totalGames}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </React.Fragment>
);

export default ListUsers;
