import React from 'react';
import './InfoTooltip.css';

import {
  PROFILE_EDIT_OK_TEXT, PROFILE_EDIT_ERROR_TEXT
} from "../../../utils/texts";

function InfoTooltip({ onClose, isSuccess, isUpdate }) {
  return (
    <div className={`popup ${!isSuccess ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button
          id="success-close-button"
          type="button"
          className="popup__close-button"
          onClick={onClose}
        />
        <h2 className="popup__signup-title">{`${isUpdate ? PROFILE_EDIT_OK_TEXT : PROFILE_EDIT_ERROR_TEXT
          }`}</h2>
      </div>
    </div>
  );
}

export default InfoTooltip;