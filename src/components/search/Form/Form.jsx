import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

import classes from "./Form.module.css";

const Form = () => {
  return (
    <form className={classes.form}>
      <div className={classes.form__field}>
        <input className={classes.form__input} type="text" placeholder="Фильм"></input>
        <button className={classes.form__button} type="button">Найти</button>
      </div>
      <div className={classes.form__filter}>
        <FilterCheckbox />
      </div>
    </form>
  )
};

export default Form;
