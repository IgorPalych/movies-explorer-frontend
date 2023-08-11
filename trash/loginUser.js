
function loginUser({ email, password }) {
  MainApi
    .authorize(email, password)
    .then((res) => {
      localStorage.setItem('token', res.token);
      setToken(res.token);
    })
    .catch((err) => {
      console.log(err);
    });
}