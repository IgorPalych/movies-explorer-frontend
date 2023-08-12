import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../components/auth/AuthContextProvider";
import { editProfile } from "../../utils/MainApi";
import Header from "../../components/page/Header/Header";
import { EMAIL_REGEX } from "../../utils/constants";

import {
  PROFILE_TITLE_TEXT,
  LABEL_NAME_TEXT,
  LABEL_EMAIL_TEXT,
  REQUIRED_ERROR_TEXT,
  NAME_MIN_ERROR_TEXT,
  NAME_MAX_ERROR_TEXT,
  DEFAULT_ERROR_TEXT,
  EMAIL_ERROR_TEXT,
  BUTTON_EDIT_TEXT,
  BUTTON_LOGOUT_TEXT,
} from "../../utils/texts";

import classes from "./Profile.module.css";

function Profile() {
  const { setIsLoggedIn, currentUserData, setCurrentUserData, token } = useContext(AuthContext);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  function onEditProfile(data) {
    editProfile(data.name, data.email, token)
      .then((res) => {
        setCurrentUserData(res.data)
      })
      .catch((err) => { console.log(err); });
  }

  function logout() {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
  }

  return (
    <div className="page">
      <Header />
      <main className={`${classes.profile} content`}>
        <h1 className={classes.profile__title}>{PROFILE_TITLE_TEXT} {currentUserData.name}!</h1>
        <form className={classes.form} onSubmit={handleSubmit(onEditProfile)}>
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
                defaultValue={currentUserData.name}
              />
            </div>
            <span className={classes.form__error}>
              {errors?.name && (errors?.name?.message || DEFAULT_ERROR_TEXT)}
            </span>
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
                {...register("email", {
                  required: REQUIRED_ERROR_TEXT,
                  pattern: {
                    value: EMAIL_REGEX,
                    message: EMAIL_ERROR_TEXT
                  }
                })}
                id="email"
                type="email"
                defaultValue={currentUserData.email}
              />
            </div>
            <span className={classes.form__error}>
              {errors?.email && (errors?.email?.message || DEFAULT_ERROR_TEXT)}
            </span>
          </fieldset>
          <button className={`${classes.button} ${classes.form__button}`} type="submit" disabled={!isValid}>{BUTTON_EDIT_TEXT}</button>
        </form>
        <button className={`${classes.button} ${classes.button_type_logout}`} type="button" onClick={logout}>{BUTTON_LOGOUT_TEXT}</button>
      </main>
    </div >
  )
};

export default Profile;
