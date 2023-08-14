import React from "react";

import { REQUEST_MOVIES_ERROR_TEXT } from "../../../utils/texts";
import "./MoviesRequestError.css";

const MoviesRequestError = () => {
  return (
    <div className="movies-request-error content">
      <p className="movies-request-error__text">
        {REQUEST_MOVIES_ERROR_TEXT}
      </p>
    </div>
  )
};

export default MoviesRequestError;
