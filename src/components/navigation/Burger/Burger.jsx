import React from "react";
import classes from "./Burger.module.css";

const Burger = ({ setActive }) => {
  return (
    <button className={classes.button} type="button" onClick={() => setActive(true)}></button>
  )
};

export default Burger;
