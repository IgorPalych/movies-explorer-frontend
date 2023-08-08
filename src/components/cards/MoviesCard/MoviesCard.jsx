import React, { useState } from "react";

import { convertDuration } from "../../../utils/utils";

import "./MoviesCard.css"

const MoviesCard = ({ movie, handleLikeClick }) => {
  const [isLiked, setIsLiked] = useState(false);

  const likeButtonClass = `card__like ${isLiked ? "card__like_active" : ''}`;

  function onLikeClick() {
    handleLikeClick(movie, isLiked);
    setIsLiked(!isLiked);
  }
  console.log();
  return (
    <div className="card">
      <img className="card__image" src={movie.image} alt={movie.nameRU} />
      <div className="card__body">
        <div className="card__info">
          <h3 className="card__title">
            {movie.nameRU}
          </h3>
          <span className="card__duration">
            {convertDuration(movie.duration)}
          </span>
        </div>
        <button className={likeButtonClass} type="button" onClick={onLikeClick} />
      </div >
    </div >
  )
};

export default MoviesCard;
