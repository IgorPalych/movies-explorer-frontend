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

export const checkToken = (token) => {
  return makeRequest(
    "/users/me",
    "GET",
    null,
    token
  );
}

export const signup = (name, email, password) => {
  return makeRequest(
    "/signup",
    "POST",
    { name, email, password },
    null
  );
}

export const singin = (email, password) => {
  return makeRequest(
    "/signin",
    "POST",
    { email, password },
    null
  );
}

export const editProfile = (name, email, token) => {
  return makeRequest(
    "/users/me",
    "PATCH",
    { name, email },
    token
  )
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

export const deleteMovie = (token, id) => {
  return makeRequest(
    `/movies/${id}`,
    "DELETE",
    null,
    token
  );
}