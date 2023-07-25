import React from "react";
import Header from "../../components/page/Header/Header";

import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div className="page">
      <Header />
      <main className={classes.wrapper}>
        <h1 className={classes.title}>Привет, Игорь!</h1>
        <form className={classes.form}>
          <fieldset className={classes.form__fieldset}>
            <label
              className={classes.form__label}
              htmlFor="name"
            >
              Имя
            </label>
            <input
              className={classes.form__input}
              id="name"
              name="name"
              type="text"
              minLength={2}
              maxLength={30}
              defaultValue="Игорь"
              autoComplete="off"
            />
          </fieldset>
          <fieldset className={classes.form__fieldset}>
            <label
              className={classes.form__label}
              htmlFor="email"
            >
              E-mail
            </label>
            <input
              className={classes.form__input}
              id="email"
              name="email"
              type="email"
              minLength={2}
              maxLength={100}
              defaultValue="sirius1913@yandex.ru"
              autoComplete="off"
            />
          </fieldset>
          <button className={`${classes.button} ${classes.form__button}`} type="button">Редактировать</button>
        </form>
        <button className={`${classes.button} ${classes.button_type_logout}`} type="button">Выйти из аккаунта</button>
      </main>
    </div >
  )
};

export default Profile;
