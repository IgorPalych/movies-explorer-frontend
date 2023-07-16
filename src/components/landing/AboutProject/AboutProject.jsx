import React from "react";
import classes from "./AboutProject.module.css";

const AboutProject = () => {
  return (
    <section className="section content" id="about">
      <div className="section__header">
        <h2 className="section__title">О проекте</h2>
      </div>
      <div className={classes.description}>
        <div className={classes.column}>
          <h3 className={classes.title}>Дипломный проект включал 5 этапов</h3>
          <p className={classes.subtitle}>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className={classes.column}>
          <h3 className={classes.title}>На выполнение диплома ушло 5 недель</h3>
          <p className={classes.subtitle}>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className={classes.scale}>
        <div className={`${classes.scale__cell} ${classes.scale__cell_type_backend}`}><span className={classes.scale__duration}>1 неделя</span></div>
        <div className={`${classes.scale__cell} ${classes.scale__cell_type_frontend}`}><span className={classes.scale__duration}>4 недели</span></div>
        <div className={classes.scale__cell}><span className={classes.scale__header}>Back-end</span ></div >
        <div className={classes.scale__cell}><span className={classes.scale__header}>Front-end</span ></div >
      </div >
    </section >
  )
};

export default AboutProject;
