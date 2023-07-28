import React from "react";

import classes from "./Techs.module.css";

const Techs = () => {
  return (
    <section className={`${classes.tech} section content`} id="techs">
      <div className="section__header">
        <h2 className="section__title">Технологии</h2>
      </div>
      <div className={classes.tech__content}>
        <div className={classes.tech__description}>
          <h3 className={classes.tech__title}>7 технологий</h3>
          <p className={classes.tech__paragraph}>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        </div>
        <ul className={classes.list}>
          <li className={classes.list__item}>HTML</li>
          <li className={classes.list__item}>CSS</li>
          <li className={classes.list__item}>JS</li>
          <li className={classes.list__item}>React</li>
          <li className={classes.list__item}>Git</li>
          <li className={classes.list__item}>Express.js</li>
          <li className={classes.list__item}>mongoDB</li>
        </ul>
      </div>
    </section>
  )
};

export default Techs;
