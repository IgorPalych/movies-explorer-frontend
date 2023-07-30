import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from '../../../router/Routes.js';

const AppRouter = () => {
  return (
    <Routes>
      {
        routes.map((route, i) =>
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
