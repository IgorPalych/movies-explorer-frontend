import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./IsLoggedInMenu.module.css"

const IsLoggedInMenu = () => {
  const isLanding = (window.location.pathname === "/") ? true : false;

  return (
    <nav className={classes.menu}>
      <NavLink
        to="/movies"
        className={({ isActive }) => `${classes.menu__link}
        ${classes.menu__link_type_movies}
        ${isLanding ? classes.menu_link_type_landing : ""}
        ${isActive ? classes.menu__link_active : ""}`
        }
      >
        Фильмы
      </NavLink>
      <NavLink
        to="/saved-movies"
        className={({ isActive }) => `${classes.menu__link}
        ${classes.menu__link_type_movies}
        ${isLanding ? classes.menu_link_type_landing : ""}
        ${isActive ? classes.menu__link_active : ""}`
        }
      >
        Сохранённые фильмы
      </NavLink>
      <NavLink
        to="/profile"
        className={`${classes.menu__link}
        ${classes.menu__link_type_account}
        ${isLanding ? classes.menu_link_type_landing : ""}`
        }
      >
        <span>Аккаунт</span>
        <div className={classes.menu__avatar} />
      </NavLink>
    </nav >
  )
};

export default IsLoggedInMenu;
