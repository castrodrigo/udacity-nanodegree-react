import React from "react";
import PropTypes from "prop-types";

const ListUserItem = ({ user, showData }) => (
  <tr key={user.userName}>
    <td>{user.userName}</td>
    <td>Played {showData ? user.totalGames : "*"} games</td>
  </tr>
);

ListUserItem.propTypes = {
  user: PropTypes.object.isRequired,
  showData: PropTypes.bool.isRequired
};

export default ListUserItem;
