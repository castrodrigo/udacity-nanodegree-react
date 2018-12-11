import React from "react";

const AnswerSelect = ({ onUserSelection }) => (
  <React.Fragment>
    <button onClick={() => onUserSelection(true)}>True</button>
    <button onClick={() => onUserSelection(false)}>False</button>
  </React.Fragment>
);

export default AnswerSelect;
