import React from "react";
import classes from './Portfolio.module.css';

const Portfolio = () => {
  return (
    <div className={classes.portfolio}>
      <h3 className={classes.portfolio__title}>Портфолио</h3>
      <nav>
        <ul className={classes.list}>
          <li className={classes.list__item}>
            <a className={classes.list__link} href="https://igorpalych.github.io/how-to-learn/" target="_blank" rel="noreferrer">
              <span>Статичный сайт</span>
              <div className={classes.list__arrow}></div>
            </a>
          </li>
          <li className={classes.list__item}>
            <a className={classes.list__link} href="https://mesto.igor-palych.nomoredomains.rocks" target="_blank" rel="noreferrer">
              <span>Одностраничное приложение</span>
              <div className={classes.list__arrow}></div>
            </a>
          </li>
          <li className={classes.list__item}>
            <a className={classes.list__link} href="https://igorpalych.github.io/russian-travel" target="_blank" rel="noreferrer">
              <span>Адаптивный сайт</span>
              <div className={classes.list__arrow}></div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
};

export default Portfolio;
