const BEATFILM_BASE_URL = 'https://api.nomoreparties.co';
const BEATFILM_URL = "https://api.nomoreparties.co/beatfilm-movies";
/* const MAIN_API_URL = "https://api.movies.igor-palych.nomoredomains.work"; */
const MAIN_API_URL = "http://localhost:3000";


const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE5MzQ5OWY1ODBkMWYzOWI1MmNmOGEiLCJpYXQiOjE2OTA5OTA2NzksImV4cCI6MTY5MTU5NTQ3OX0.2jZZlMTk0B9Tkx8zrL4OluCsWg4fNYa00IC2IsqfvSU";

const EMAIL_REGEX =
  /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const UI_TEXTS = {
  moviesNotFound: "Ничего не найдено"
}

const SHORT_DURATION = 40;

export {
  BEATFILM_BASE_URL,
  BEATFILM_URL,
  MAIN_API_URL,
  TOKEN,
  UI_TEXTS,
  EMAIL_REGEX,
  SHORT_DURATION
}