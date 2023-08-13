import React, { useContext } from "react";

import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

import Navigation from "../../navigation/Navigation/Navigation";
import Logo from "../Logo/Logo";

import classes from './Header.module.css';

const Header = () => {
  const isLanding = (window.location.pathname === "/") ? true : false;
  const { isLoggedIn } = useContext(CurrentUserContext);

  return (
    <header className={`${classes.header} ${isLanding ? classes.header_type_landing : ''} content`}>
      <Logo />
      <Navigation isLoggedIn={isLoggedIn} />
    </header>
  )
};

export default Header;
