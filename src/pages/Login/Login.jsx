import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Logo from "../../components/page/Logo/Logo";
import { REGEXP_EMAIL } from "../../utils/constants";

import {
  SIGNIN_TITLE_TEXT,
  LABEL_EMAIL_TEXT,
  REQUIRED_ERROR_TEXT,
  EMAIL_ERROR_TEXT,
  DEFAULT_ERROR_TEXT,
  LABEL_PASSWORD_TEXT,
  PASSWORD_ERROR_TEXT,
  EMAIL_PLACEHOLDER_TEXT,
  PASSWORD_PLACEHOLDER_TEXT,
  BUTTON_SIGNIN_TEXT,
  LINK_SIGNUP_TEXT,
  OFFER_SIGNUP_TEXT
} from "../../utils/texts";

import classes from "./Login.module.css";

const Login = ({ handleLogin, errorMessage, setErrorMessage }) => {

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    handleLogin(data.email, data.password);
    setErrorMessage('');
    reset();
  }

  return (
    <div className="page">
      <div className={classes.wrapper}>
        <header className={classes.header}>
          <Logo />
          <h1 className={classes.header__title}>{SIGNIN_TITLE_TEXT}</h1>
        </header>
        <main>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <fieldset className={classes.form__fieldset}>
              <div className={classes.form__field}>
                <label
                  htmlFor="email"
                  className={classes.form__label}
                >
                  {LABEL_EMAIL_TEXT}
                </label>
                <input
                  className={classes.form__input}
                  {...register("email", {
                    required: REQUIRED_ERROR_TEXT,
                    pattern: {
                      value: REGEXP_EMAIL,
                      message: EMAIL_ERROR_TEXT
                    }
                  })}
                  id="email"
                  type="email"
                  placeholder={EMAIL_PLACEHOLDER_TEXT}
                />
                <span className={classes.form__error}>
                  {errors?.email && (errors?.email?.message || DEFAULT_ERROR_TEXT)}
                </span>
              </div>
              <div className={classes.form__field}>
                <label
                  htmlFor="password"
                  className={classes.form__label}
                >
                  {LABEL_PASSWORD_TEXT}
                </label>
                <input
                  className={classes.form__input}
                  {...register("password", {
                    required: REQUIRED_ERROR_TEXT,
                    minLength: {
                      value: 6,
                      message: PASSWORD_ERROR_TEXT
                    },
                  })}
                  id="password"
                  type="password"
                  placeholder={PASSWORD_PLACEHOLDER_TEXT}
                />
                <span className={classes.form__error}>
                  {errors?.password && (errors?.password?.message || DEFAULT_ERROR_TEXT)}
                </span>
              </div>
            </fieldset>
            <span className={classes.form__error}>{errorMessage}</span>
            <button className={classes.form__button} type="submit" disabled={!isValid}>{BUTTON_SIGNIN_TEXT}</button>
          </form>
        </main>
        <footer className={classes.footer}>
          <span>{OFFER_SIGNUP_TEXT}</span>
          <Link to="/signup" className={classes.link}>
            {LINK_SIGNUP_TEXT}
          </Link>
        </footer>
      </div >
    </div >
  )
};

export default Login;
