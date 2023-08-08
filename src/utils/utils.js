import { BEATFILM_BASE_URL } from "./constants";

export function convertDuration(duration) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  if (hours === 0) {
    return `${minutes > 0 ? ` ${minutes}м` : ''}`;
  } else {
    return `${hours}ч${minutes > 0 ? ` ${minutes}м` : ''}`;
  }
}

//приводим формат данных BEATFILM к нашему формату в MongoDB
export function convertMovieData(movie) {
  const convertedMovie = {
    country: movie.country,
    director: movie.director,
    duration: movie.duration,
    year: movie.year,
    description: movie.description,
    image: `${BEATFILM_BASE_URL}${movie.image.url}`,
    trailer: movie.trailerLink,
    nameRU: movie.nameRU,
    nameEN: movie.nameEN,
    thumbnail: `${BEATFILM_BASE_URL}${movie.image.url}`,
    movieId: `${movie.id}`,
    saved: false,
  }

  return convertedMovie;
}

// получаем и возвращаем из localStorage данные по поиску и фильтрации или пустые значения
export function getLocalStorageData() {
  const storageData = {
    movies: JSON.parse(localStorage.getItem('movies')) || [],
    query: localStorage.getItem('query') || "",
    checkBox: JSON.parse(localStorage.getItem('checkBox')) || false,
  };

  return storageData;
}