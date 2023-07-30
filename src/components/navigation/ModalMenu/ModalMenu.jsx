import React from "react";
import { Link } from "react-router-dom";
import classes from "./ModalMenu.module.css";

const ModalMenu = ({ active, setActive }) => {
  const backdropClasses = [classes.backdrop];
  const contentClasses = [classes.content];

  if (active) {
    backdropClasses.push(classes.active);
    contentClasses.push(classes.active);
  }

  return (
    <div className={classes.modal}>
      <div className={backdropClasses.join(' ')} onClick={() => setActive(false)}></div>
      <div className={contentClasses.join(' ')} onClick={evt => evt.stopPropagation()}>
        <button className={classes.button} type="button" onClick={() => setActive(false)}></button>
        <nav className={classes.links}>
          <Link
            to="/"
            className={classes.link}
            onClick={() => setActive(false)}
          >
            Главная
          </Link>
          <Link
            to="/movies"
            className={`${classes.link} ${classes.link_type_movies}`}
            onClick={() => setActive(false)}
          >
            Фильмы
          </Link>
          <Link
            to="/saved-movies"
            className={classes.link}
            onClick={() => setActive(false)}
          >
            Сохранённые фильмы</Link>
          <Link
            to="/profile"
            className={`${classes.link} ${classes.link_type_account}`}
            onClick={() => setActive(false)}
          >
            <span>Аккаунт</span>
            <div className={classes.avatar}></div>
          </Link>
        </nav>
      </div>
    </div>
  )
};

export default ModalMenu;
