import React, { useState } from "react";
import Die from "./Die";

const defaultProps = ["one", "two", "three", "four", "five", "six"];

const RollDice = () => {
  const [die1, setDie1] = useState(
    defaultProps[Math.floor(Math.random() * defaultProps.length)]
  );

  const [die2, setDie2] = useState(
    defaultProps[Math.floor(Math.random() * defaultProps.length)]
  );

  const rollDice = () => {
    setDie1(defaultProps[Math.floor(Math.random() * defaultProps.length)]);
    setDie2(defaultProps[Math.floor(Math.random() * defaultProps.length)]);
  };

  return (
    <div>
      <Die num={die1} />
      <Die num={die2} />
      <button onClick={() => rollDice()}>Roll!</button>
    </div>
  );
};

export default RollDice;
