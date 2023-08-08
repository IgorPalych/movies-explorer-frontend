import React from "react";
import { useForm } from "react-hook-form";

import "./Form.css";

const Form = ({ onSearchMovies, query }) => {

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
            required: "Поле обязательно к заполнению",
          })}
          type="text"
          placeholder="Фильм"
          defaultValue={query || ""}
        ></input>
        <button className="form__button" type="submit" disabled={!isValid}>Найти</button>
      </div>
      <span className="form__error">
        {errors?.name && (errors?.name?.message || "Ошибка!")}
      </span>
    </form>
  )
};

export default Form;
