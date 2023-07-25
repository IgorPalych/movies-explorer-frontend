import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../components/page/Logo/Logo";

import classes from "./Login.module.css";

const Login = () => {
  return (
    <div className="page">
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <Logo />
          <h1 className={classes.title}>Рады видеть!</h1>
        </div>
        <form className={classes.form}>
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
                id="email"
                type="email"
                placeholder=""
                required
                minLength={2}
                maxLength={100}
                autoComplete="off"
              />
              <span className={classes.form__error}>
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
                id="password"
                type="password"
                placeholder=""
                required
                minLength={2}
                maxLength={100}
                autoComplete="off"
              />
              <span className={classes.form__error}>
              </span>
            </div>
          </fieldset>
          <button className={classes.form__button} type="button">Зарегистрироваться</button>
        </form>
        <div className={classes.footer}>
          <span>Еще не зарегистрированы?</span>
          <Link to="/signup" className={classes.link}>
            Регистрация
          </Link>
        </div>
      </div >
    </div >
  )
};

export default Login;
