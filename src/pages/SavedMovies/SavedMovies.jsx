import React, { useState, useEffect } from "react";

import * as ManiApi from "../../utils/MainApi";

import Header from "../../components/page/Header/Header";
import MoviesCardList from "../../components/cards/MoviesCardList/MoviesCardList";
import Footer from "../../components/page/Footer/Footer";

import { TOKEN } from "../../utils/constants";

const SavedMovies = () => {
  const [moviesToRender, setMoviesToRender] = useState([]);

  useEffect(() => {
    ManiApi.getMovies(TOKEN)
      .then(data => setMoviesToRender(data.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="page">
      <Header />
      <main>
        <MoviesCardList movies={moviesToRender} />
      </main>
      <Footer />
    </div >
  )
};

export default SavedMovies;
