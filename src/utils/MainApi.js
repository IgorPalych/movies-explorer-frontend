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
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return response.json().then((result) => {
          let error = new Error(`Error ${response.status}`);
          error.response = result.message;
          throw error;
        });
      }
    })
}

export const getUserInfo = (token) => {
  return makeRequest(
    "/users/me",
    "GET",
    null,
    token
  );
}

export const register = (name, email, password) => {
  return makeRequest(
    "/signup",
    "POST",
    { name, email, password },
    null
  );
}

export const login = (email, password) => {
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