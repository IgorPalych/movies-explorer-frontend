import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../../navigation/Navigation/Navigation";

import classes from './Header.module.css';
import logo from '../../../images/logo.svg';

const Header = () => {
  const isLanding = (window.location.pathname === "/") ? true : false;

  return (
    <header className={`${classes.header} ${isLanding ? classes.landing : ''} content`}>
      <Link className={classes.logo} to="/">
        <img src={logo} alt="Логотип Видеопроводника." />
      </Link>
      <Navigation />
    </header>
  )
};

export default Header;
