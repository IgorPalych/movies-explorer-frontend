import React, { useState, useEffect } from "react";

/* import { useGetSavedMovies, useGetBeatFilmMovies } from "../../hooks/useGetMovies"; */

import { UI_TEXTS, TOKEN } from "../../utils/constants";

import { filterByQuery, filterByDuration, convertMovieData } from '../../utils/utils';

import Header from "../../components/page/Header/Header";
import Search from "../../components/search/Search/Search";
import MoviesCardList from "../../components/cards/MoviesCardList/MoviesCardList";
import Footer from "../../components/page/Footer/Footer";


const Movies = () => {

  const [moviesToRender, setMoviesToRender] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isRequestError, setIsRequestError] = useState(false);

  useEffect(() => {
    localStorage.setItem('checkBox', isCheckBoxActive);
    let moviesList = getMoviesFromStorage();
    if (isCheckBoxActive) {
      moviesList = filterByDuration(moviesList);
    }
    setMoviesToRender(moviesList);
  }, [isCheckBoxActive]);

  // обрабатываем переключение чекбокса
  function handleToggleCheckBox() {
    setIsCheckBoxActive(!isCheckBoxActive);
  }

  // получаем список фильмов из хранилища
  function getMoviesFromStorage() {
    return JSON.parse(localStorage.getItem('movies')) || [];
  }

  // получаем текст запроса из хранилища
  function getQueryText() {
    return localStorage.getItem('query') || "";
  }

  // получаем статус чек-бокса из хранилища
  function getCheckboxStatus() {
    return JSON.parse(localStorage.getItem('checkBox') || false);
  }

  // обрабатываем лайк
  function handleLikeClick(movie, isLiked) {
    handleSaveMovie(movie);
    /* isLiked
      ? MainApi
        .deleteMovie(TOKEN, movie)
        .then(data => console.log("Фильм удален", data))
        .catch(err => console.log(err))
      : handleSaveMovie(movie); */
  }

  // обрабатываем сохранение фильма
  function handleSaveMovie(movie) {
    const isMovieSaved = savedMovies.some((item) => {
      return item.movieId === movie.movieId
    });
    if (!isMovieSaved) {
      delete movie.saved;
      delete movie._id;
      MainApi
        .saveMovie(TOKEN, movie)
        .then(res => {
          setSavedMovies([...savedMovies, res.data]);
          const updateMoviesToRender = moviesToRender.map((item) =>
            item.movieId === res.data.movieId
              ? (item = { ...item, saved: true, _id: res.data._id })
              : item
          )
          setMoviesToRender(updateMoviesToRender);
          localStorage.setItem("movies", JSON.stringify(updateMoviesToRender));
        })
        .catch(err => console.log("Ошибка создания фильма", err));
    }
    else {
      console.log("Фильм уже сохранен");
    }
  }

  // обрабатываем удаление фильма

  // получаем и обрабатываем фильмы с BEATFILM
  function onSearchMovies(query) {
    MoviesApi.getMovies()
      .then((data) => {
        let moviesList = filterByQuery(data, query);
        moviesList = moviesList.map((item) => convertMovieData(item));
        isCheckBoxActive
          ? setMoviesToRender(filterByDuration(moviesList))
          : setMoviesToRender(moviesList);
        setQueryText(query);
        localStorage.setItem('movies', JSON.stringify(moviesList));
        localStorage.setItem('query', query);
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
      <Search
        isCheckBoxActive={isCheckBoxActive}
        queryText={queryText}
        onSearchMovies={onSearchMovies}
        handleToggleCheckBox={handleToggleCheckBox}
      />
      {
        moviesToRender.length > 0
          ? <MoviesCardList
            movies={moviesToRender}
            isLoading={isLoading}
            isRequestError={isRequestError}
            handleLikeClick={handleLikeClick}
          />
          : <h1>{UI_TEXTS.moviesNotFound}</h1>
      }
      <Footer />
    </div >
  )
};

export default Movies;