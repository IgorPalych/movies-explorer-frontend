import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`${classes.wrapper} content`}>
      <div className={classes.description}>
        <span className={classes.text}>Учебный проект Яндекс.Практикум х BeatFilm</span>
      </div>
      <div className={classes.links}>
        <span className={classes.copyright}>&copy; 2023</span>
        <a className={`${classes.link} ${classes.yandex}`}
          href="https://practicum.yandex.ru/"
          target="_blank"
          rel="noreferrer">Яндекс.Практикум</a>
        <a className={`${classes.link} ${classes.github}`}
          href="https://github.com/"
          target="_blank"
          rel="noreferrer">Github</a>
      </div>
    </footer>
  )
};

export default Footer;
