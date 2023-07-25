import React from "react";
import { Link } from "react-router-dom";

import classes from "./Logo.module.css";
import logo from "../../../images/logo.svg";

const Logo = (props) => {
  return (
    <Link className={classes.logo} to="/">
      <img src={logo} alt="Логотип Видеопроводника." />
    </Link>
  )
};

export default Logo;
