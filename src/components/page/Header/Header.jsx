import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../../UI/Navigation/Navigation";


import './Header.css';
import logo from '../../../images/logo.svg';

const Header = () => {
  return (
    <div className="header content">
      <Link className="header__logo" to="/"><img src={logo} alt="Логотип Видеопроводника." /></Link>
      <Navigation />
    </div>
  )
};

export default Header;
