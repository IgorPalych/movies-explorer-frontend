import { BEATFILM_URL } from "./constants";

export function getMovies() {
  return fetch(BEATFILM_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(res.status);
  });
}
