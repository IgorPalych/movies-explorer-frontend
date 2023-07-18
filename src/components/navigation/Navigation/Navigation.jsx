import React, { useState, useEffect } from "react";

import IsLoggedInMenu from "../IsLoggedInMenu/IsLoggedInMenu";
import NotLoggedInMenu from "../NotLoggedInMenu/NotLoggedInMenu";
import ModalMenu from "../ModalMenu/ModalMenu";
import Burger from "../Burger/Burger";

import classes from "./Navigation.module.css";

const Navigation = () => {
  const [modalActive, setModalActive] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const getScreenSize = () => {
    setScreenSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', getScreenSize);
  }, [screenSize])

  return (
    <div className={classes.navigation}>
      {
        (screenSize > 768) ? <IsLoggedInMenu /> : <Burger setActive={setModalActive} />
      }
      <ModalMenu active={modalActive} setActive={setModalActive} />
    </div>
  )
};

export default Navigation;
