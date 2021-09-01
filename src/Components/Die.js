import React from "react";
import "./Die.css";

const Die = ({ num, rolling }) => {
  return (
    <i
      className={` ${rolling ? `Die fas fa-dice` : `Die fas fa-dice-${num}`} ${
        rolling ? "Shaking" : ""
      }`}
    ></i>
  );
};

export default Die;
