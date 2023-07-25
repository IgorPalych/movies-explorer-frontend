import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./NotFound.module.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <main className={classes.wrapper}>
        <div className={classes.content}>
          <h1 className={classes.title}>404</h1>
          <span className={classes.subtitle}>Страница не найдена</span>
        </div>
        <button className={classes.button} onClick={() => navigate(-1)}>Назад</button>
      </main>
    </div>
  )
};

export default NotFound;
