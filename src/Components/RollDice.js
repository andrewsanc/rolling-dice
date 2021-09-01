import React, { useState } from "react";
import Die from "./Die";

const defaultProps = ["one", "two", "three", "four", "five", "six"];

const RollDice = () => {
  const [rolling, setRolling] = useState(false);

  const [die1, setDie1] = useState(defaultProps[0]);

  const [die2, setDie2] = useState(defaultProps[0]);

  const rollDice = () => {
    setRolling(true);
    setTimeout(() => {
      setDie1(defaultProps[Math.floor(Math.random() * defaultProps.length)]);
      setDie2(defaultProps[Math.floor(Math.random() * defaultProps.length)]);
      setRolling(false);
    }, 1000);
  };

  return (
    <div>
      <Die num={die1} />
      <Die num={die2} />
      <button onClick={() => rollDice()}>
        {rolling ? "Rolling..." : "Roll"}
      </button>
    </div>
  );
};

export default RollDice;
