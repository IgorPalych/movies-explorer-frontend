import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signup } from "../../utils/MainApi";
import { Link } from "react-router-dom";
import Logo from "../../components/page/Logo/Logo";
import { EMAIL_REGEX } from "../../utils/constants";

import {
  SIGNUP_TITLE_TEXT,
  LABEL_NAME_TEXT,
  LABEL_EMAIL_TEXT,
  LABEL_PASSWORD_TEXT,
  REQUIRED_ERROR_TEXT,
  NAME_MIN_ERROR_TEXT,
  NAME_MAX_ERROR_TEXT,
  NAME_PLACEHOLDER_TEXT,
  EMAIL_ERROR_TEXT,
  PASSWORD_ERROR_TEXT,
  DEFAULT_ERROR_TEXT,
  EMAIL_PLACEHOLDER_TEXT,
  PASSWORD_PLACEHOLDER_TEXT,
  OFFER_SIGNIN_TEXT,
  LINK_SIGNIN_TEXT
} from "../../utils/texts";

import classes from "./Register.module.css";


const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
  });

  const onSignup = (data) => {
    signup(data.name, data.email, data.password)
      .then((res) => {
        console.log(res.data);
        navigate('/signin');
      })
      .catch((err) => {
        console.log(err);
      })
    reset();
  }

  return (
    <div className="page">
      <div className={classes.wrapper}>
        <header className={classes.header}>
          <Logo />
          <h1 className={classes.header__title}>{SIGNUP_TITLE_TEXT}</h1>
        </header>
        <main>
          <form className={classes.form} onSubmit={handleSubmit(onSignup)}>
            <fieldset className={classes.form__fieldset}>
              <div className={classes.form__field}>
                <label
                  htmlFor="name"
                  className={classes.form__label}
                >
                  {LABEL_NAME_TEXT}
                </label>
                <input
                  className={classes.form__input}
                  {...register("name", {
                    required: REQUIRED_ERROR_TEXT,
                    minLength: {
                      value: 3,
                      message: NAME_MIN_ERROR_TEXT
                    },
                    maxLength: {
                      value: 40,
                      message: NAME_MAX_ERROR_TEXT
                    }
                  })}
                  id="name"
                  type="text"
                  placeholder={NAME_PLACEHOLDER_TEXT}
                />
                <span className={classes.form__error}>
                  {errors?.name && (errors?.name?.message || DEFAULT_ERROR_TEXT)}
                </span>
              </div>
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
                      value: EMAIL_REGEX,
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
            <button className={classes.form__button} type="submit" disabled={!isValid}>Зарегистрироваться</button>
          </form>
        </main>
        <footer className={classes.footer}>
          <span>{OFFER_SIGNIN_TEXT}</span>
          <Link to="/signin" className={classes.link}>
            {LINK_SIGNIN_TEXT}
          </Link>
        </footer>
      </div >
    </div >
  )
};

export default Register;
