import React, { useState } from "react";
import Die from "./Die";
import "./RollDice.css";

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
    <div className='RollDice'>
      <div className='RollDice-container'>
        <Die num={die1} rolling={rolling} />
        <Die num={die2} rolling={rolling} />
      </div>
      <button className='button' onClick={() => rollDice()} disabled={rolling}>
        {rolling ? "Rolling..." : "Roll"}
      </button>
    </div>
  );
};

export default RollDice;
