import React from "react";

import classes from './NavTab.module.css';

const NavTab = () => {
  return (
    <nav className={`${classes.wrapper} content`}>
      <ul className={classes.list}>
        <li><a className={classes.list__link} href="/#about">О проекте</a></li>
        <li><a className={classes.list__link} href="/#techs">Технологии</a></li>
        <li><a className={classes.list__link} href="/#student">Студент</a></li>
      </ul>
    </nav >
  )
};

export default NavTab;
