import Main from '../pages/Main/Main';
import Movies from '../pages/Movies/Movies';
import SavedMovies from '../pages/SavedMovies/SavedMovies';
import Profile from '../pages/Profile/Profile';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import NotFound from '../pages/NotFound/NotFound';

export const routes = [
  { path: '/', element: <Main />, exact: true },
  { path: '/movies', element: <Movies />, exact: false },
  { path: '/saved-movies', element: <SavedMovies />, exact: false },
  { path: '/profile', element: <Profile />, exact: false },
  { path: '/signin', element: <Login />, exact: false },
  { path: '/signup', element: <Register />, exact: false },
  { path: '*', element: <NotFound />, exact: false }
]