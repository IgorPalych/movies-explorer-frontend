import React, { useState, useEffect } from "react";

import { useFilter } from "../../hooks/useFilter";
import { useFetching } from "../../hooks/useFetching";

import * as MoviesApi from "../../utils/MoviesApi";
import * as MainApi from "../../utils/MainApi";

import Header from "../../components/page/Header/Header";
import Form from "../../components/filter/Form/Form";
import FilterCheckbox from "../../components/filter/FilterCheckbox/FilterCheckbox"
import MoviesCardList from "../../components/cards/MoviesCardList/MoviesCardList";
import Footer from "../../components/page/Footer/Footer";

import { UI_TEXTS, TOKEN } from "../../utils/constants";

import {
  getLocalStorageData,
  convertMovieData,
} from '../../utils/utils';


import "./Movies.css";

const Movies = () => {
  const { movies, query, checkBox } = getLocalStorageData();

  const [savedMovies, setSavedMovies] = useState([]);
  const [beatFilmMovies, setBeatFilmMovies] = useState([]);

  const [queryValue, setQueryValue] = useState(query);
  const [checkBoxValue, setCheckBoxValue] = useState(checkBox);

  const filteredMovies = useFilter(movies, queryValue, checkBoxValue);

  const [fetchSavedMovies, isSavedMoviesLoading, savedMoviesError] = useFetching(async () => {
    const response = await MainApi.getMovies(TOKEN);
    setSavedMovies(response.data);
  })

  const [fetchBeatFilms, isBeatFilmsLoading, beatFilmError] = useFetching(async () => {
    const response = await MoviesApi.getMovies();
    setBeatFilmMovies(response);
  })

  useEffect(() => {
    fetchSavedMovies();
  }, []);

  useEffect(() => {
    localStorage.setItem('checkBox', checkBoxValue);
  }, [checkBoxValue]);

  // обрабатываем переключение чекбокса
  function handleToggleCheckBox() {
    setCheckBoxValue(!checkBoxValue);
  }

  // получаем и обрабатываем фильмы с BEATFILM
  function onSearchMovies(query) {
    fetchBeatFilms();
    const movies = beatFilmMovies.map((item) => convertMovieData(item));
    localStorage.setItem('movies', JSON.stringify(movies));
    localStorage.setItem('query', query);
    setBeatFilmMovies(movies);
    setQueryValue(query);
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
            filteredMovies.length > 0
              ? <MoviesCardList
                movies={filteredMovies}
                isLoading={isBeatFilmsLoading}
                isRequestError={beatFilmError}
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