import React, { useState } from "react";
import useResize from "../../../hooks/useResize";

import IsLoggedInMenu from "../IsLoggedInMenu/IsLoggedInMenu";
import NotLoggedInMenu from "../NotLoggedInMenu/NotLoggedInMenu";
import ModalMenu from "../ModalMenu/ModalMenu";
import Burger from "../Burger/Burger";

import "./Navigation.css";

const Navigation = ({ isLoggedIn }) => {
  const [modalActive, setModalActive] = useState(false);
  const screenSize = useResize();
  return (
    <div className="navigation">
      {
        isLoggedIn
          ? (screenSize.width > 768)
            ? <IsLoggedInMenu />
            : <Burger setActive={setModalActive} />
          : <NotLoggedInMenu />
      }
      <ModalMenu active={modalActive} setActive={setModalActive} />
    </div>
  )
};

export default Navigation;
