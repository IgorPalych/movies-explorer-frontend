import React from "react";
import classes from "./Promo.module.css";

const Promo = () => {
  return (
    <section className={`${classes.promo} content`}>
      <h1 className={classes.promo__title}>Учебный проект студента факультета Веб-разработки</h1>
    </section>
  )
};

export default Promo;
