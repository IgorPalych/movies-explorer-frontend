import React from "react";

import classes from './NavTab.module.css';

const NavTab = () => {
  return (
    <nav className={`${classes.wrapper} content`}>
      <ul className={classes.list}>
        <li><a className={classes.link} href="/#about">О проекте</a></li>
        <li><a className={classes.link} href="/#techs">Технологии</a></li>
        <li><a className={classes.link} href="/#student">Студент</a></li>
      </ul>
    </nav >
  )
};

export default NavTab;
