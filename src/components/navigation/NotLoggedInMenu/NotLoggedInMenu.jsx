import React from "react";
import { Link } from "react-router-dom";
import classes from "./NotLoggedInMenu.module.css"

const NotLoggedInMenu = () => {
  return (
    <nav className={classes.wrapper}>
      <Link
        className={`${classes.link} ${classes.link_type_signup}`}
        to="/signup">
        Регистрация
      </Link>
      <Link
        className={`${classes.link} ${classes.link_type_signin}`}
        to="/signin">
        <span className={classes['signin-text']}>
          Войти
        </span>
      </Link>
    </nav>
  )
};

export default NotLoggedInMenu;
