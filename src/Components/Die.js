import React from "react";
import "./Die.css";

const Die = ({ num, rolling }) => {
  return (
    <i className={`Die fas fa-dice-${num} ${rolling ? "Shaking" : ""}`}></i>
  );
};

export default Die;
