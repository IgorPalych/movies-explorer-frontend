import React from "react";
import classes from './Portfolio.module.css';

const Portfolio = () => {
  return (
    <div className={classes.wrapper}>
      <h3 className={classes.title}>Портфолио</h3>
      <nav>
        <ul className={classes.list}>
          <li className={classes.list__item}>
            <a className={classes.link} href="/" target="_blank">
              <span>Статичный сайт</span>
              <div className={classes.arrow}></div>
            </a>
          </li>
          <li className={classes.list__item}>
            <a className={classes.link} href="/" target="_blank">
              <span>Одностраничное приложение</span>
              <div className={classes.arrow}></div>
            </a>
          </li>
          <li className={classes.list__item}>
            <a className={classes.link} href="/" target="_blank">
              <span>Адаптивный сайт</span>
              <div className={classes.arrow}></div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
};

export default Portfolio;
