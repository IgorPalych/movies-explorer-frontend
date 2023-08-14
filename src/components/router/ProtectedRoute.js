import { Navigate } from "react-router-dom";

function ProtectedRoute({ component: Component, ...props }) {
  console.log(props.isLoggedIn);
  return (
    props.isLoggedIn ? <Component {...props} /> : <Navigate to="/signin" replace />
  )
}

export default ProtectedRoute;