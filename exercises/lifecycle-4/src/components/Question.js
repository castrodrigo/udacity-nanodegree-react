import React from "react";

const Question = ({ values, proposedAnswer }) => {
  const parsedValues = values.join(" + ");
  return (
    <div className="equation">
      <p className="text">{`${parsedValues} = ${proposedAnswer}`}</p>
    </div>
  );
};

export default Question;
