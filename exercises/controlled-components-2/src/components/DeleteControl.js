import React from "react";
import PropTypes from "prop-types";

const DeleteControl = ({ onClick, isDisabled }) => (
  <React.Fragment>
    <button onClick={onClick} disabled={isDisabled}>
      Delete Last Item
    </button>
  </React.Fragment>
);

DeleteControl.propTypes = {
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
};

export default DeleteControl;
