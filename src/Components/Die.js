import React from "react";
import "./Die.css";

const Die = ({ num }) => {
  return <i className={`Die fas fa-dice-${num}`}></i>;
};

export default Die;
