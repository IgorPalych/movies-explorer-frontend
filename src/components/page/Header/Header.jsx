import React from "react";
import Navigation from "../../navigation/Navigation/Navigation";
import Logo from "../Logo/Logo";

import classes from './Header.module.css';

const Header = () => {
  const isLanding = (window.location.pathname === "/") ? true : false;

  return (
    <header className={`${classes.header} ${isLanding ? classes.header_type_landing : ''} content`}>
      <Logo />
      <Navigation />
    </header>
  )
};

export default Header;
