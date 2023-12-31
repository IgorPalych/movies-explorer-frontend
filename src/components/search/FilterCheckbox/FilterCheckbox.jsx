import React from "react";

import classes from "./FilterCheckbox.module.css";

const FilterCheckbox = () => {
  return (
    <label className={classes.filter} htmlFor="short-movies">
      <input className={classes.filter__checkbox}
        type="checkbox"
        id="short-movies"
        name="short-movies"
        value="short-movies"
        defaultChecked={true}
      />
      <span className={classes.filter__switch} type="button" />
      <span className={classes.filter__text}>
        Короткометражки
      </span>
    </label>
  )
};

export default FilterCheckbox;