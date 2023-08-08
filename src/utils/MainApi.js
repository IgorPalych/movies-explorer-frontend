import { MAIN_API_URL } from "./constants";

function makeRequest(url, method, body, token) {
  const options = {
    method,
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  }

  if (body) {
    options.body = JSON.stringify(body);
  }

  if (token) {
    options.headers.authorization = `Bearer ${token}`;
  }

  return fetch(`${MAIN_API_URL}${url}`, options)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(`Ошибка. Код ошибки: ${res.status}`);
    })
}

export const register = (email, password) => {
  return makeRequest(
    "/signup",
    "POST",
    { email, password },
    null
  );
}

export const authorize = (email, password) => {
  return makeRequest(
    "/signin",
    "POST",
    { email, password },
    null
  );
}

export const checkToken = (token) => {
  return makeRequest(
    "/users/me",
    "GET",
    null,
    token
  );
}

export const getMovies = (token) => {
  return makeRequest(
    "/movies",
    "get",
    null,
    token
  );
};

export const saveMovie = (token, movie) => {
  return makeRequest(
    "/movies",
    "POST",
    movie,
    token
  );
}

export const deleteMovie = (movie, token) => {
  return makeRequest(
    `/movies/${movie.movieId}`,
    "DELETE",
    null,
    token
  );
}