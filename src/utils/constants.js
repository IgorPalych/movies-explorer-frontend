const BEATFILM_BASE_URL = 'https://api.nomoreparties.co';
const BEATFILM_URL = "https://api.nomoreparties.co/beatfilm-movies";
/* const MAIN_API_URL = "https://api.movies.igor-palych.nomoredomains.work"; */
const MAIN_API_URL = "http://localhost:3000";

const EMAIL_REGEX =
  /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const SHORT_DURATION = 40;

export {
  BEATFILM_BASE_URL,
  BEATFILM_URL,
  MAIN_API_URL,
  EMAIL_REGEX,
  SHORT_DURATION
}