import React, { useState } from "react";

import classes from "./MoviesCard.module.css";

const MoviesCard = ({ title, duration, image }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const favoriteButtonClass = `${classes.card__favorite} ${isFavorite ? classes.card__favorite_active : ''}`;

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  }

  return (
    <div className={classes.card}>
      <img className={classes.card__image} src={image} alt="" />
      <div className={classes.card__body}>
        <div className={classes.card__info}>
          <h3 className={classes.card__title}>
            {title}
          </h3>
          <span className={classes.card__duration}>
            {duration}
          </span>
        </div>
        <button className={favoriteButtonClass} type="button" onClick={toggleFavorite} />
      </div>
    </div>
  )
};

export default MoviesCard;
