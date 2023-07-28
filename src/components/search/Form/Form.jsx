import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useForm } from "react-hook-form";

import classes from "./Form.module.css";

const Form = () => {
  const {
    register,
    formState: { isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    reset();
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.form__field}>
        <input
          className={classes.form__input}
          {...register("name", {
            required: true,
          })}
          type="text"
          placeholder="Фильм"
        ></input>
        <button className={classes.form__button} type="button" disabled={!isValid}>Найти</button>
      </div>
      <div className={classes.form__filter}>
        <FilterCheckbox />
      </div>
    </form>
  )
};

export default Form;
