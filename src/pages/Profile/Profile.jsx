import React, { useEffect, useContext, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useForm from "../../hooks/useForm";
import Header from "../../components/page/Header/Header";

import {
  PROFILE_TITLE_TEXT,
  LABEL_NAME_TEXT,
  LABEL_EMAIL_TEXT,
  BUTTON_EDIT_TEXT,
  BUTTON_LOGOUT_TEXT,
} from "../../utils/texts";

import classes from "./Profile.module.css";

function Profile({ onUpdateProfile, signOut, isLoading }) {
  const { currentUser } = useContext(CurrentUserContext);
  const { enteredValues, errors, handleChange, isFormValid, resetForm } = useForm();
  const [isLastValues, setIsLastValues] = useState(false);

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm]);

  useEffect(() => {
    if (currentUser.name === enteredValues.name && currentUser.email === enteredValues.email) {
      setIsLastValues(true);
    } else {
      setIsLastValues(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enteredValues]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateProfile({
      name: enteredValues.name,
      email: enteredValues.email,
    });
  }

  return (
    <div className="page">
      <Header />
      <main className={`${classes.profile} content`}>
        <h1 className={classes.profile__title}>{PROFILE_TITLE_TEXT} {currentUser.name}!</h1>
        <form id="form" className={classes.form} onSubmit={handleSubmit} noValidate>
          <fieldset className={classes.form__fieldset}>
            <div className={classes.form__field}>
              <label
                className={classes.form__label}
                htmlFor="name"
              >
                {LABEL_NAME_TEXT}
              </label>
              <input
                className={classes.form__input}
                name="name"
                id="name"
                type="text"
                minLength="3"
                maxLength="40"
                required
                onChange={handleChange}
                value={enteredValues.name || ''}
              />
            </div>
            <span className={classes.form__error}>{errors.name}</span>
          </fieldset>
          <fieldset className={classes.form__fieldset}>
            <div className={classes.form__field}>
              <label
                className={classes.form__label}
                htmlFor="email"
              >
                {LABEL_EMAIL_TEXT}
              </label>
              <input
                className={classes.form__input}
                name="email"
                id="email"
                type="email"
                pattern="^\S+@\S+\.\S+$"
                required
                onChange={handleChange}
                value={enteredValues.email || ''}
              />
            </div>
            <span className={classes.form__error}>
              <span className={classes.form__error}>{errors.email}</span>
            </span>
          </fieldset>
          <button className={`${classes.button} ${classes.form__button}`} type="submit" disabled={!isFormValid || isLastValues || isLoading ? true : false}>{BUTTON_EDIT_TEXT}</button>
        </form>
        <button className={`${classes.button} ${classes.button_type_logout}`} type="button" onClick={signOut}>{BUTTON_LOGOUT_TEXT}</button>
      </main>
    </div >
  )
};

export default Profile;
