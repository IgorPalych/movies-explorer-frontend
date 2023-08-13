import React from "react";

import "./RequestError.css";

const RequestError = ({ active, setActive }) => {
  return (
    <div className={active ? 'modal-request-error active' : 'modal-request-error'} onClick={() => setActive(false)}>
      <div className={active ? 'modal-request-error__box active' : 'modal-request-error__box'}>
        <span className="modal-request-error__text">
          Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз
        </span>
      </div>
    </div>
  )
};

export default RequestError;


{/* import RequestError from "../../components/UI/RequestError/RequestError"; */
  /* <RequestError active={isRequestError} setActive={setIsRequestError} /> */
}
