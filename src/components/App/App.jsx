import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
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
import InfoTooltip from '../UI/InfoTooltip/InfoTooltip';


import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tokenCheck, setTokenCheck] = useState(false);
  const [token, setToken] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);

  const [loginErrorMessage, setLoginErrorMessage] = useState('');
  const [registerErrorMessage, setRegisterErrorMessage] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const jwt = localStorage.getItem("token");
    if (jwt) {
      setIsLoggedIn(true);
      setTokenCheck(true);
      setToken(jwt);
    } else {
      setIsLoggedIn(false);
      setTokenCheck(true);
    }
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
        setRegisterErrorMessage(err.response);
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
        setLoginErrorMessage(err.response);
        console.log(err);
      })
  }

  function handleUpdateProfile({ name, email }) {
    setIsLoading(true);
    MainApi.editProfile(name, email, token)
      .then((res) => {
        setIsUpdate(true);
        setCurrentUser(res.data);
      })
      .catch((err) => {
        setIsSuccess(false);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleLogout() {
    localStorage.clear();
    setIsLoggedIn(false);
    setCurrentUser({});
    navigate("/");
  }

  function closeUnsuccessPopup() {
    setIsSuccess(true);
    setIsUpdate(false);
  }

  return (
    tokenCheck &&
    <CurrentUserContext.Provider value={{
      currentUser,
      isLoggedIn
    }}>
      <Routes>
        <Route path="/" element={
          <Main />
        }
        />
        <Route path="/signup" element={
          isLoggedIn
            ? <Navigate to="/" replace />
            : <Register
              handleRegister={handleRegister}
              errorMessage={registerErrorMessage}
              setErrorMessage={setRegisterErrorMessage}
            />
        }
        />
        <Route path="/signin" element={
          isLoggedIn
            ? <Navigate to="/" replace />
            : <Login
              handleLogin={handleLogin}
              errorMessage={loginErrorMessage}
              setErrorMessage={setLoginErrorMessage}
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
            onUpdateProfile={handleUpdateProfile}
            signOut={handleLogout}
            isLoading={isLoading}
          />
        }
        />
        <Route path="/movies" element={
          <ProtectedRoute
            component={Movies}
            savedMovies={savedMovies}
            saveMovie={handleSaveMovie}
            deleteMovie={handleDeleteMovie}
          />
        }
        />
        <Route path="/saved-movies" element={
          <ProtectedRoute
            component={SavedMovies}
            savedMovies={savedMovies}
            deleteMovie={handleDeleteMovie}
          />
        }
        />
      </Routes>
      <InfoTooltip isSuccess={isSuccess} onClose={closeUnsuccessPopup} />
      <InfoTooltip isSuccess={!isUpdate} isUpdate={isUpdate} onClose={closeUnsuccessPopup} />
    </CurrentUserContext.Provider >
  )
};

export default App;
