import React from "react";

import Header from "../../components/page/Header/Header";
import Promo from "../../components/landing/Promo/Promo";
import NavTab from "../../components/UI/NavTab/NavTab";
import AboutProject from "../../components/landing/AboutProject/AboutProject";
import Techs from "../../components/landing/Techs/Techs";
import Student from "../../components/landing/Student/Student";
import Footer from '../../components/page/Footer/Footer';

import "./Main.css";

const Main = () => {
  return (
    <div className="page">
      <Header />
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <Student />
      <Footer />
    </div>
  )
};

export default Main;
