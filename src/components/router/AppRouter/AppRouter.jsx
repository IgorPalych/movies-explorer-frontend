import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from '../../../router/Routes';
import { AuthContext } from "../../../contexts/AuthContext";

const AppRouter = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    isLoggedIn
      ? <Routes>
        {
          privateRoutes.map((route, i) =>
            <Route
              key={i}
              path={route.path}
              element={route.element}
              exact={route.exact}
            />
          )
        }
      </Routes>
      : <Routes>
        {
          publicRoutes.map((route, i) =>
            <Route
              key={i}
              path={route.path}
              element={route.element}
              exact={route.exact}
            />
          )
        }
      </Routes>
  );
};

export default AppRouter;
