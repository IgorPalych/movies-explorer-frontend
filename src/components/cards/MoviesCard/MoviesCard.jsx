import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { convertDuration } from "../../../utils/utils";

import "./MoviesCard.css"

const MoviesCard = ({ movie, handleCardButtonClick, cardButtonClass }) => {
  const [isLiked, setIsLiked] = useState('');
  const [likeButtonClass, setLikeButtonClass] = useState('');
  const { pathname } = useLocation();

  useEffect(() => {
    pathname === "/saved-movies"
      ? setLikeButtonClass('card__button card__button_type_delete')
      : setLikeButtonClass(`card__button ${isLiked ? "card__button_type_like-active" : 'card__button_type_like'}`);
  }, [pathname, isLiked]);

  useEffect(() => {
    if (movie.saved) {
      setIsLiked(true);
    }
  }, [movie.saved]);

  function onButtonClick() {
    handleCardButtonClick(movie, isLiked);
    setIsLiked(!isLiked);
  }

  return (
    <div className="card">
      <a className="card__link" href={movie.trailer} target="_blank" rel="noreferrer">
        <img className="card__image" src={movie.image} alt={movie.nameRU} />
      </a>
      <div className="card__body">
        <div className="card__info">
          <a className="card__link" href={movie.trailer} target="_blank" rel="noreferrer">
            <h3 className="card__title">
              {movie.nameRU}
            </h3>
          </a>
          <span className="card__duration">
            {convertDuration(movie.duration)}
          </span>
        </div>
        <button className={likeButtonClass} type="button" onClick={onButtonClick} />
      </div >
    </div >
  )
};

export default MoviesCard;
