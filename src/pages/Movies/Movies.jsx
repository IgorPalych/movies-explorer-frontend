import React, { useState, useEffect } from "react";

import { useFilter } from "../../hooks/useFilter";
import { useIsSaved } from "../../hooks/useIsSaved";

import Header from "../../components/page/Header/Header";
import Form from "../../components/filter/Form/Form";
import FilterCheckbox from "../../components/filter/FilterCheckbox/FilterCheckbox"
import MoviesCardList from "../../components/cards/MoviesCardList/MoviesCardList";
import Footer from "../../components/page/Footer/Footer";

import * as MoviesApi from "../../utils/MoviesApi";

import { MOVIES_NOT_FOUND_TEXT } from "../../utils/texts";

import { getLocalStorageData, convertMovieData, } from '../../utils/utils';

import "./Movies.css";

const Movies = ({ savedMovies, saveMovie, deleteMovie }) => {
  const { movies, query, checkBox } = getLocalStorageData();
  const [queryValue, setQueryValue] = useState(query);
  const [checkBoxValue, setCheckBoxValue] = useState(checkBox);
  const [isRequestError, setIsRequestError] = useState(false);
  const filteredMovies = useFilter(movies, queryValue, checkBoxValue);
  const moviesToRender = useIsSaved(filteredMovies, savedMovies);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem('checkBox', checkBoxValue);
  }, [checkBoxValue]);

  function handleToggleCheckBox() {
    setCheckBoxValue(!checkBoxValue);
  }

  function handleLikeClick(movie, isSaved) {
    isSaved
      ? deleteMovie(movie._id)
      : saveMovie(movie);
  }

  // получаю фильмы с BEATFILM и конвертирую в наш формат,
  // затем сохраняю фильмы и запрос в localStorage
  function onSearchMovies(query) {
    setIsLoading(true);
    MoviesApi.getMovies()
      .then((res) => {
        const movies = res.map((item) => convertMovieData(item));
        localStorage.setItem('movies', JSON.stringify(movies));
        localStorage.setItem('query', query);
        setQueryValue(query);
      })
      .catch((err) => {
        setIsRequestError(true);
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <div className="page">
      <Header />
      <main className="movies content">
        <div className="movies__filter">
          <Form
            queryValue={queryValue}
            onSearchMovies={onSearchMovies}
          />
          <FilterCheckbox
            checkBoxValue={checkBoxValue}
            toggleCheckBox={handleToggleCheckBox}
          />
        </div>
        <div className="movies__container">
          {
            moviesToRender.length > 0
              ? <MoviesCardList
                movies={moviesToRender}
                isLoading={isLoading}
                handleCardButtonClick={handleLikeClick}
                isRequetsError={isRequestError}
              />
              : queryValue
                ? <h1 className="movies__not-found-text">{MOVIES_NOT_FOUND_TEXT}</h1>
                : ''
          }
        </div>
      </main>
      <Footer />
    </div >
  )
};

export default Movies;