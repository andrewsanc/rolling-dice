import React, { useState } from "react";

const defaultProps = ["one", "two", "three", "four", "five", "six"];

const RollDice = () => {
  const [die1, setDie1] = useState(
    defaultProps[Math.floor(Math.random() * defaultProps.length)]
  );

  const [die2, setDie2] = useState(
    defaultProps[Math.floor(Math.random() * defaultProps.length)]
  );

  return (
    <div>
      <div>{die1}</div>
      <div>{die2}</div>
    </div>
  );
};

export default RollDice;
