import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./IsLoggedInMenu.module.css"

const IsLoggedInMenu = (props) => {
  return (
    <nav className={classes.wrapper}>
      <NavLink
        to="/movies"
        className={
          ({ isActive }) => `${classes.link} ${classes.link_type_movies} ${isActive ? classes.link_active : ""}`
        }>
        Фильмы
      </NavLink>
      <NavLink
        to="/saved-movies"
        className={({ isActive }) => `${classes.link} ${classes.link_type_movies} ${isActive ? classes.link_active : ""}`}>
        Сохранённые фильмы
      </NavLink>
      <NavLink
        to="/profile"
        className={`${classes.link} ${classes.link_type_account}`}>
        <span>Аккаунт</span>
        <div className={classes.avatar} />
      </NavLink>
    </nav >
  )
};

export default IsLoggedInMenu;
