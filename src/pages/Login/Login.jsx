import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import Logo from "../../components/page/Logo/Logo";
import classes from "./Login.module.css";
import { EMAIL_REGEX } from "../../utils/utils";

const Login = () => {
  const {
    register,
    formState: { errors, isValid },
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
    <div className="page">
      <div className={classes.wrapper}>
        <header className={classes.header}>
          <Logo />
          <h1 className={classes.header__title}>Рады видеть!</h1>
        </header>
        <main>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <fieldset className={classes.form__fieldset}>
              <div className={classes.form__field}>
                <label
                  htmlFor="email"
                  className={classes.form__label}
                >
                  Email
                </label>
                <input
                  className={classes.form__input}
                  {...register("email", {
                    required: "Поле обязательно к заполнению",
                    pattern: {
                      value: EMAIL_REGEX,
                      message: "Неверный формат электронной почты"
                    }
                  })}
                  id="email"
                  type="email"
                  placeholder="user@server.ru"
                />
                <span className={classes.form__error}>
                  {errors?.email && (errors?.email?.message || "Ошибка!")}
                </span>
              </div>
              <div className={classes.form__field}>
                <label
                  htmlFor="password"
                  className={classes.form__label}
                >
                  Пароль
                </label>
                <input
                  className={classes.form__input}
                  {...register("password", {
                    required: "Поле обязательно к заполнению",
                    minLength: {
                      value: 6,
                      message: "Минимум 6 символов"
                    },
                  })}
                  id="password"
                  type="password"
                  placeholder="Минимум 6 символов"
                />
                <span className={classes.form__error}>
                  {errors?.password && (errors?.password?.message || "Ошибка!")}
                </span>
              </div>
            </fieldset>
            <button className={classes.form__button} type="button" disabled={!isValid}>Зарегистрироваться</button>
          </form>
        </main>
        <footer className={classes.footer}>
          <span>Еще не зарегистрированы?</span>
          <Link to="/signup" className={classes.link}>
            Регистрация
          </Link>
        </footer>
      </div >
    </div >
  )
};

export default Login;
