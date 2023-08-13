import React from "react";
import { useForm } from "react-hook-form";
import {
  FILTER_ERROR_TEXT,
  DEFAULT_ERROR_TEXT,
  BUTTON_FILTER_TEXT
} from "../../../utils/texts";

import "./Form.css";

const Form = ({ onSearchMovies, queryValue }) => {

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
  });

  function onSubmit(query) {
    onSearchMovies(query.name);
    reset();
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__field">
        <input
          className="form__input"
          {...register("name", {
            required: FILTER_ERROR_TEXT,
          })}
          type="text"
          placeholder="Фильм"
          defaultValue={queryValue || ""}
        ></input>
        <button className="form__button" type="submit" disabled={!isValid}>{BUTTON_FILTER_TEXT}</button>
      </div>
      <span className="form__error">
        {errors?.name && (errors?.name?.message || DEFAULT_ERROR_TEXT)}
      </span>
    </form>
  )
};

export default Form;
