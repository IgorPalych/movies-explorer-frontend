import React, { useState, useEffect, useContext } from "react";

import { useFilter } from "../../hooks/useFilter";
import { useIsSaved } from "../../hooks/useIsSaved";
import { AuthContext } from "../../contexts/AuthContext";

import Header from "../../components/page/Header/Header";
import Form from "../../components/filter/Form/Form";
import FilterCheckbox from "../../components/filter/FilterCheckbox/FilterCheckbox"
import MoviesCardList from "../../components/cards/MoviesCardList/MoviesCardList";
import Footer from "../../components/page/Footer/Footer";

import * as MoviesApi from "../../utils/MoviesApi";
import * as MainApi from "../../utils/MainApi";

import { UI_TEXTS } from "../../utils/constants";

import {
  getLocalStorageData,
  convertMovieData,
} from '../../utils/utils';

import "./Movies.css";

const Movies = () => {
  const { movies, query, checkBox } = getLocalStorageData();

  const [queryValue, setQueryValue] = useState(query);
  const [checkBoxValue, setCheckBoxValue] = useState(checkBox);

  const [savedMovies, setSavedMovies] = useState([]);
  const filteredMovies = useFilter(movies, queryValue, checkBoxValue);
  const moviesToRender = useIsSaved(filteredMovies, savedMovies);

  const [isLoading, setIsLoading] = useState(false);
  const [isRequestError, setIsRequestError] = useState(false);

  const { token } = useContext(AuthContext);

  // получаю мои сохраненные фильмы,
  // записываю их в переменную состояния
  useEffect(() => {
    MainApi.getMovies(token)
      .then((res) => {
        setSavedMovies(res.data);
      })
      .catch((err) => console.log(err));
  }, [token]);

  // записываю значение чекбокса в localStorage
  useEffect(() => {
    localStorage.setItem('checkBox', checkBoxValue);
  }, [checkBoxValue]);

  // переключаю чекбокс
  function handleToggleCheckBox() {
    setCheckBoxValue(!checkBoxValue);
  }

  // обрабатываю клик по лайку
  function handleLikeClick(movie, isSaved) {
    isSaved
      ? onDeleteMovie(token, movie._id)
      : onSaveMovie(movie);
  }

  // удаляю фильм
  function onDeleteMovie(token, id) {
    MainApi.deleteMovie(token, id)
      .then((res) => {
        const newSavedList = savedMovies.filter((item) =>
          (item._id !== id)
        );
        setSavedMovies(newSavedList)
      })
      .catch((err) => { console.log('Ошибка', err) })
  }

  // сохраняю фильм
  function onSaveMovie(movie) {
    delete movie.saved;
    MainApi.saveMovie(token, movie)
      .then(res => {
        setSavedMovies([...savedMovies, res.data]);
      })
      .catch((err) => {
        console.log('Ошибка', err);
      })
  }

  // получаю фильмы с BEATFILM и конвертирую в наш формат
  // сохраняю фильмы и запрос в localStorage
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
            handleToggleCheckBox={handleToggleCheckBox}
          />
        </div>
        <div className="movies__container">
          {
            moviesToRender.length > 0
              ? <MoviesCardList
                movies={moviesToRender}
                isLoading={isLoading}
                isRequestError={isRequestError}
                handleCardButtonClick={handleLikeClick}
              />
              : <h1 className="movies__not-found-text">{UI_TEXTS.moviesNotFound}</h1>
          }
        </div>
      </main>
      <Footer />
    </div >
  )
};

export default Movies;