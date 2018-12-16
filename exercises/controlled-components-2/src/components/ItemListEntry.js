import React from "react";
import PropTypes from "prop-types";

const InputListEntry = ({ item, index }) => <li key={index}>{item}</li>;

InputListEntry.prototype = {
  item: PropTypes.string.isRequired,
  index: PropTypes.any.isRequired
};

export default InputListEntry;
