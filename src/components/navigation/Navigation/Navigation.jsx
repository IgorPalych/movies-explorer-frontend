import React, { useState, useContext } from "react";
import useResize from "../../../hooks/useResize";
import { AuthContext } from "../../../components/auth/AuthContextProvider";

import IsLoggedInMenu from "../IsLoggedInMenu/IsLoggedInMenu";
import NotLoggedInMenu from "../NotLoggedInMenu/NotLoggedInMenu";
import ModalMenu from "../ModalMenu/ModalMenu";
import Burger from "../Burger/Burger";

import "./Navigation.css";

const Navigation = () => {
  const [modalActive, setModalActive] = useState(false);
  const screenSize = useResize();
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="navigation">
      {
        (screenSize.width > 768)
          ? isLoggedIn
            ? <IsLoggedInMenu />
            : <NotLoggedInMenu />
          : <Burger setActive={setModalActive} />
      }
      <ModalMenu active={modalActive} setActive={setModalActive} />
    </div>
  )
};

export default Navigation;
