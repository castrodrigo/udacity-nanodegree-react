import React from "react";

const Score = ({ correct, total }) => (
  <p className="text">
    Your Score: {correct}/{total}
  </p>
);

export default Score;
