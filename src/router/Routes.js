import AboutProject from '../pages/AboutProject/AboutProject';
import Movies from '../pages/Movies/Movies';
import SavedMovies from '../pages/SavedMovies/SavedMovies';
import Profile from '../pages/Profile/Profile';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

export const routes = [
  { path: '/', element: <AboutProject />, exact: false },
  { path: '/movies', element: <Movies />, exact: false },
  { path: '/saved-movies', element: <SavedMovies />, exact: false },
  { path: '/profile', element: <Profile />, exact: false },
  { path: '/signin', element: <Login />, exact: false },
  { path: '/signup', element: <Register />, exact: false },
]