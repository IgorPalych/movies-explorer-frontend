import React from "react";

import Header from "../../components/page/Header/Header";
import Search from "../../components/search/Search/Search";
import MoviesCardList from "../../components/cards/MoviesCardList/MoviesCardList";
import Footer from "../../components/page/Footer/Footer";

import { movies } from "../../utils/movies";

const Movies = () => {
  return (
    <div className="page">
      <Header />
      <main>
        <Search />
        <MoviesCardList movies={movies} />
      </main>
      <Footer />
    </div >
  )
};

export default Movies;