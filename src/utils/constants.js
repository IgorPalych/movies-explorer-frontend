const BEATFILM_BASE_URL = 'https://api.nomoreparties.co';
const BEATFILM_URL = "https://api.nomoreparties.co/beatfilm-movies";
/* const MAIN_API_URL = "https://api.movies.igor-palych.nomoredomains.work"; */
const MAIN_API_URL = "http://localhost:3000";


const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE5MzQ5OWY1ODBkMWYzOWI1MmNmOGEiLCJpYXQiOjE2OTE2MDEwMzMsImV4cCI6MTY5MjIwNTgzM30.TbbQ2eFnd5GNH_FEuCLse4QPAUBYKWZPCxNrfdTK1KU";

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