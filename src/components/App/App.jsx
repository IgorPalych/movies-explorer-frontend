import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../router/ProtectedRoute';

import * as MainApi from '../../utils/MainApi';

import Main from '../../pages/Main/Main';
import Register from '../../pages/Register/Register';
import Login from '../../pages/Login/Login';
import Profile from '../../pages/Profile/Profile';
import Movies from '../../pages/Movies/Movies';
import SavedMovies from '../../pages/SavedMovies/SavedMovies';
import NotFound from '../../pages/NotFound/NotFound';


import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [token, setToken] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const jwt = localStorage.getItem("token");
    setToken(jwt);
  }, []);

  useEffect(() => {
    if (!token) {
      return;
    }
    getUserData(token);
    getSavedMovies(token);

  }, [token]);

  function getUserData(token) {
    MainApi.getUserInfo(token)
      .then((res) => {
        setCurrentUser(res.data);
        setIsLoggedIn(true);
      })
      .catch((err) => { console.log(err) })
  }

  function getSavedMovies(token) {
    MainApi.getMovies(token)
      .then((res) => {
        setSavedMovies(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleSaveMovie(movie) {
    delete movie.saved;
    MainApi.saveMovie(token, movie)
      .then(res => {
        setSavedMovies([...savedMovies, res.data]);
      })
      .catch((err) => {
        setErrorMessage(err.response);
        console.log(err);
      });
  }

  function handleDeleteMovie(id) {
    MainApi.deleteMovie(token, id)
      .then((res) => {
        const newSavedList = savedMovies.filter((item) =>
          (item._id !== id)
        );
        setSavedMovies(newSavedList)
      })
      .catch((err) => {
        setErrorMessage(err.response);
        console.log(err);
      })
  }

  function handleRegister(name, email, password) {
    MainApi.register(name, email, password)
      .then((res) => {
        if (res.data.name && res.data.email) {
          handleLogin(email, password)
        }
      })
      .catch((err) => {
        setErrorMessage(err.response);
        console.log(err);
      })
  }

  function handleLogin(email, password) {
    MainApi.login(email, password)
      .then((res) => {
        localStorage.setItem('token', res.data);
        setIsLoggedIn(true);
        getUserData(res.data);
        navigate('/movies');
      })
      .catch((err) => {
        setErrorMessage(err.response);
        console.log(err);
      })
  }

  function handleEditProfile(name, email) {
    MainApi.editProfile(name, email, token)
      .then((res) => {
        setCurrentUser(res.data);
      })
      .catch((err) => {
        setErrorMessage(err.response);
        console.log(err);
      });
  }

  function handleLogout() {
    localStorage.clear();
    setIsLoggedIn(false);
    setCurrentUser({});
    navigate("/");
  }

  return (
    <CurrentUserContext.Provider value={{
      currentUser,
      isLoggedIn
    }}>
      <Routes>
        <Route path="/" element={
          <Main />}
        />
        <Route path="/signup" element={
          <Register
            handleRegister={handleRegister}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
          />
        }
        />
        <Route path="/signin" element={
          <Login
            handleLogin={handleLogin}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
          />
        }
        />
        <Route path="/*" element={
          <NotFound />
        }
        />
        <Route path="/profile" element={
          <ProtectedRoute
            component={Profile}
            isLoggedIn={isLoggedIn}
            handleEditProfile={handleEditProfile}
            handleLogout={handleLogout}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
          />
        }
        />
        <Route path="/movies" element={
          <ProtectedRoute
            component={Movies}
            isLoggedIn={isLoggedIn}
            savedMovies={savedMovies}
            saveMovie={handleSaveMovie}
            deleteMovie={handleDeleteMovie}
          />
        }
        />
        <Route path="/saved-movies" element={
          <ProtectedRoute
            component={SavedMovies}
            isLoggedIn={isLoggedIn}
            savedMovies={savedMovies}
            deleteMovie={handleDeleteMovie}
          />
        }
        />
      </Routes>
    </CurrentUserContext.Provider >
  )
};

export default App;
