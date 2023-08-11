import React, { useState, useEffect, useContext } from "react";

import { useFilter } from "../../hooks/useFilter";
import { AuthContext } from "../../contexts/AuthContext";

import Header from "../../components/page/Header/Header";
import Form from "../../components/filter/Form/Form";
import FilterCheckbox from "../../components/filter/FilterCheckbox/FilterCheckbox"
import MoviesCardList from "../../components/cards/MoviesCardList/MoviesCardList";
import Footer from "../../components/page/Footer/Footer";

import * as MainApi from "../../utils/MainApi";

import { UI_TEXTS } from "../../utils/constants";

import "../Movies/Movies";

function SavedMovies() {
  const deleteButtonClass = 'card__button card__button_type_delete'
  const [queryValue, setQueryValue] = useState('');
  const [checkBoxValue, setCheckBoxValue] = useState(false);

  const [savedMovies, setSavedMovies] = useState([]);
  const moviesToRender = useFilter(savedMovies, queryValue, checkBoxValue);

  const { token } = useContext(AuthContext);

  // загружаю сохраненые фильмы
  useEffect(() => {
    MainApi.getMovies(token)
      .then((res) => {
        setSavedMovies(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // переключаю чекбокс
  function handleToggleCheckBox() {
    setCheckBoxValue(!checkBoxValue);
  }

  // удаляю фильм
  function handleCardButtonClick(movie) {
    MainApi.deleteMovie(token, movie._id)
      .then((res) => {
        const newSavedList = savedMovies.filter((item) =>
          (item._id !== movie._id)
        );
        setSavedMovies(newSavedList)
      })
      .catch((err) => { console.log('Ошибка', err) })
  }

  // фильтрую фильмы по запросу
  function onSearchMovies(query) {
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
            moviesToRender.length > 0
              ? <MoviesCardList
                movies={moviesToRender}
                cardButtonClass={deleteButtonClass}
                handleCardButtonClick={handleCardButtonClick}
              />
              : <h1 className="movies__not-found-text">{UI_TEXTS.moviesNotFound}</h1>
          }
        </div>
      </main>
      <Footer />
    </div >
  )
};

export default SavedMovies;
