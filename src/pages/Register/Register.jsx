import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../components/page/Logo/Logo";

import classes from "./Register.module.css";


const Register = () => {
  return (
    <div className="page">
      <div className={classes.wrapper}>
        <header className={classes.header}>
          <Logo />
          <h1 className={classes.title}>Добро пожаловать!</h1>
        </header>
        <form className={classes.form}>
          <fieldset className={classes.form__fieldset}>
            <div className={classes.form__field}>
              <label
                htmlFor="name"
                className={classes.form__label}
              >
                Имя
              </label>
              <input
                className={classes.form__input}
                id="name"
                type="text"
                placeholder=""
                required
                minLength={2}
                maxLength={30}
                autoComplete="off"
              />
              <span className={classes.form__error}>
              </span>
            </div>
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
          <span>Уже зарегистрированы?</span>
          <Link to="/signin" className={classes.link}>
            Войти
          </Link>
        </div>
      </div >
    </div >
  )
};

export default Register;
