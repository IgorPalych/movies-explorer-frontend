import { useMemo } from "react";
import { SHORT_DURATION } from "../utils/constants";

export const useFilterShorts = (movies, checkBox) => {
  const filteredMovies = useMemo(() => {
    if (checkBox) {
      return movies.filter((movie) => movie.duration < SHORT_DURATION);
    }
    return movies;
  }, [movies, checkBox]);

  return filteredMovies;
}



export const useFilter = (movies, query, checkBox) => {
  const filteredMovies = useFilterShorts(movies, checkBox);

  const filteredAndSearchedPosts = useMemo(() => {
    return filteredMovies.filter((movie) => {
      const movieRu = String(movie.nameRU).toLowerCase().trim();
      const movieEn = String(movie.nameEN).toLowerCase().trim();
      const userQuery = query.toLowerCase().trim();
      return movieRu.indexOf(userQuery) !== -1 || movieEn.indexOf(userQuery) !== -1;
    });
  }, [query, filteredMovies]);



  return filteredAndSearchedPosts;
}
