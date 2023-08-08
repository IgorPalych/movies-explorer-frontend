import React from "react";

import "./RequestError.css";

const RequestError = () => {
  return (
    <div className="request-error content">
      <span className="request-error__text">
        Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз
      </span>
    </div>
  )
};

export default RequestError;
