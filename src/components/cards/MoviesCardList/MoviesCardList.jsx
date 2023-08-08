import React, { useState, useEffect } from "react";
import useResize from "../../../hooks/useResize";
import MoviesCard from "../MoviesCard/MoviesCard";

import PreLoader from "../../UI/PreLoader/PreLoader";
import RequestError from "../../UI/RequestError/RequestError";

import "./MoviesCardList.css";

const MoviesCardList = ({ movies, isLoading, isRequetsError, handleLikeClick }) => {
  const screenWidth = useResize().width;
  const [cardsCount, setCardsCount] = useState(0);

  const moviesToRender = movies.slice(0, cardsCount);

  useEffect(() => {
    if (screenWidth >= 1280) {
      setCardsCount(12)
    } else if (screenWidth >= 768) {
      setCardsCount(8)
    } else {
      setCardsCount(5)
    }
  }, [screenWidth]);

  function showMore() {
    if (screenWidth >= 1280) {
      setCardsCount(cardsCount + 3)
    } else {
      setCardsCount(cardsCount + 2)
    }
  }

  return (
    <div className="cards">
      {isLoading && <PreLoader />}
      {isRequetsError && <RequestError />}
      {
        !isLoading && !isRequetsError &&
        <>
          <ul className="cards">
            {
              moviesToRender.map((movie) =>
                <li key={movie.movieId} className="cards__item">
                  <MoviesCard
                    movie={movie}
                    handleLikeClick={handleLikeClick}
                  />
                </li>
              )
            }
          </ul>
          <div className="cards__more">
            {
              movies.length > moviesToRender.length && (
                <button
                  className="cards__more-btn"
                  onClick={showMore}
                >
                  Ещё
                </button>
              )
            }
          </div>
        </>
      }
    </div >
  )
};

export default MoviesCardList;
