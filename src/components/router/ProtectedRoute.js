import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ProtectedRoute({ component: Component, ...props }) {
  const { isLoggedIn } = useContext(CurrentUserContext);

  return (
    isLoggedIn ? <Component {...props} /> : <Navigate to="/" replace />
  )
}

export default ProtectedRoute;